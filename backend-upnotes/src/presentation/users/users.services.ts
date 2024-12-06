import { prisma } from '../../data';
import { CreateUserDto } from '../../domain/dtos/users/create-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';
import { EmailService, EncriptionService} from '../services';
import { VerificationCodeService } from '../verification-code/verification-code.services';
import { ProfileService } from '../profile/profile.services';

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

  private async isUserInDataBase( email: string ) {
    const userExists = await prisma.user.findUnique({
      where: { email }
    })

    if ( userExists ) {
      throw CustomError.badRequest('El correo ya existe. Intente con otro.')
    }
  }

  public async postUser( createUserDto: CreateUserDto ) {

    await this.isUserInDataBase( createUserDto.email )

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

  public async validateUser() {
    
  }

}