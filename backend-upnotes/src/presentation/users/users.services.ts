import { envs } from '../../config';
import { prisma } from '../../data';
import { CreateUserDto } from '../../domain/dtos/users/create-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';
import { VerificationCodeService, EmailService, TokenService, EncriptionService} from '../services';

interface UserServiceOption {
  emailService: EmailService,
  tokenService: TokenService,
  verificationCodeService: VerificationCodeService,
  encripterService: EncriptionService
}

export class UserService {

  private readonly emailService: EmailService;
  private readonly tokenService: TokenService;
  private readonly verificationCodeService: VerificationCodeService;
  private readonly encripterService: EncriptionService

  constructor ( userOptions: UserServiceOption ) {
    const { emailService, tokenService, verificationCodeService, encripterService} = userOptions;
    this.emailService = emailService
    this.tokenService = tokenService
    this.verificationCodeService = verificationCodeService
    this.encripterService = encripterService
  }

  public async postUser( createUserDto: CreateUserDto ) {

    const userExists = await prisma.user.findUnique({
      where: { email: createUserDto.email }
    })

    if ( userExists ) {
      throw CustomError.badRequest('El correo ya existe. Intente con otro.')
    }

    try {

      const passwordHashed = this.encripterService.hashPassword(createUserDto.password)

      const userCreated = await prisma.user.create({data: {
        ...createUserDto,
        password: passwordHashed,
      }})
      
      await prisma.profile.create({ data: { userId: userCreated.id }})

      const { password, ...restUserEntity } = UserEntity.fromObject( userCreated )

      const verificationCode = this.verificationCodeService.generateVerificationNumberCode()

      await prisma.verificacionCode.create({
        data: {
          code: verificationCode,
          expiresAt: new Date( Date.now() + this.verificationCodeService.codeDurationMin * 60 * 1000 ),
          userId: userCreated.id
        }
      })

      await this.emailService.sendEmailWithVerificationCode({
        email: userCreated.email,
        code: verificationCode,
        frontendUrl: `${envs.FRONTEND_URL}/auth/verify-account`,
      })

      return {
        user: restUserEntity,
      }

    } catch (error) {
      throw CustomError.internalServerError(`${error}`)
    }

  } 

}