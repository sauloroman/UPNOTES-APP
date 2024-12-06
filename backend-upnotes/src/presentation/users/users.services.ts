import { bcryptAdapter, envs, jwtGenerator } from '../../config';
import { prisma } from '../../data';
import { CreateUserDto } from '../../domain/dtos/users/create-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';
import { VerificationCodeService, EmailService, TokenService} from '../services';

interface UserServiceOption {
  emailService: EmailService,
  tokenService: TokenService,
  verificationCodeService: VerificationCodeService
}

const errorMessages = {
  emailExists: 'El correo ya existe. Intente con otro.',
  errorSendingEmail: 'El email no se pudo enviar'
}

export class UserService {

  private readonly emailService: EmailService;
  private readonly tokenService: TokenService;
  private readonly verificationCodeService: VerificationCodeService;

  constructor ( userOptions: UserServiceOption ) {
    const { emailService, tokenService, verificationCodeService } = userOptions;
    this.emailService = emailService
    this.tokenService = tokenService
    this.verificationCodeService = verificationCodeService
  }

  public async postUser( createUserDto: CreateUserDto ) {

    const userExists = await prisma.user.findUnique({
      where: { email: createUserDto.email }
    })

    if ( userExists ) {
      throw CustomError.badRequest( errorMessages.emailExists )
    }

    try {

      const passwordHashed = bcryptAdapter.hash(createUserDto.password)

      const userCreated = await prisma.user.create({data: {
        ...createUserDto,
        password: passwordHashed,
        createdAt: new Date(),
      }})
      
      await prisma.profile.create({ data: { userId: userCreated.id }})

      const { password, ...restUserEntity } = UserEntity.fromObject( userCreated )

      await prisma.verificacionCode.create({
        data: {
          code: this.verificationCodeService.generateVerificationNumberCode(),
          createdAt: new Date(),
          expiresAt: new Date( Date.now() + this.verificationCodeService.codeDurationMin * 60 * 1000 ),
          userId: userCreated.id
        }
      })

      // if ( !emailSent ) throw CustomError.internalServerError( errorMessages.errorSendingEmail ) 

      return {
        user: restUserEntity,
      }

    } catch (error) {
      throw CustomError.internalServerError(`${error}`)
    }

  } 

}