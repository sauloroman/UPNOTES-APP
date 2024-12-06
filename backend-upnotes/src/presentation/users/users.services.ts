import { prisma } from '../../data';
import { ValidateUserDto, CreateUserDto } from '../../domain/dtos';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';

import { EmailService, EncriptionService} from '../services';
import { VerificationCodeService } from '../verification-code/verification-code.services';
import { ProfileService } from '../profile/profile.services';
import { User } from '@prisma/client';

interface UserServiceOption {
  emailService: EmailService,
  verificationCodeService: VerificationCodeService,
  profileService: ProfileService,
  encripterService: EncriptionService
}

export class UserService {

  private readonly emailService: EmailService;
  private readonly verificationCodeService: VerificationCodeService;
  private readonly encripterService: EncriptionService
  private readonly  profileService: ProfileService

  constructor ( userOptions: UserServiceOption ) {
    const { emailService, verificationCodeService, encripterService, profileService } = userOptions;
    this.emailService = emailService
    this.verificationCodeService = verificationCodeService
    this.encripterService = encripterService
    this.profileService = profileService
  }

  private async getUserByEmail( email: string ): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email }
    })
  }

  public async postUser( createUserDto: CreateUserDto ) {

    if( await this.getUserByEmail( createUserDto.email ) ) {
      throw CustomError.badRequest('El correo ya existe. Intente con otro.')
    }

    try {

      const passwordHashed = this.encripterService.hashPassword(createUserDto.password)

      const userCreated = await prisma.user.create({data: {
        ...createUserDto,
        password: passwordHashed,
      }})
      const profileId = await this.profileService.postProfile( userCreated.id )
      const verificationCode = await this.verificationCodeService.postVerificationCode( userCreated.id )
      
      await this.emailService.sendEmailWithVerificationCode({
        email: userCreated.email,
        code: verificationCode,
      })
      
      const { password, ...restUserEntity } = UserEntity.fromObject({ ...userCreated, profileId })

      return {
        user: restUserEntity,
      }

    } catch (error) {
      throw CustomError.internalServerError(`${error}`)
    }

  } 

  public async validateUser( validateUserDto: ValidateUserDto ) {
    
    const { code, email } = validateUserDto

    const userExists = await this.getUserByEmail( email )

    if ( !userExists ) {
      throw CustomError.notFound(`El usuario con correo ${email} no existe`)
    }
    
    if ( !userExists.isActive ) {
      throw CustomError.badRequest('El usuario no está activo')
    }

    if ( userExists.isAccountVerified ) {
      throw CustomError.badRequest('El usuario ya está verificado. Inicie sesión')
    }

    const user = await prisma.user.findUnique({ where: {email} } )

    const isCodeActive = await this.verificationCodeService.isValidationCodeActive(code, user!.id)

    if ( !isCodeActive ) {
      throw CustomError.badRequest(`El codigo ya ha expirado. Vuelva a generar uno`)
    }

    await prisma.user.update({ 
      where: { email },
      data: {
        isAccountVerified: true
      }
    })

  }

}