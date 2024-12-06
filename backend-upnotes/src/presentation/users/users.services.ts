import { bcryptAdapter, jwtGenerator } from '../../config';
import { prisma } from '../../data';
import { CreateUserDto } from '../../domain/dtos/users/create-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';
import { EmailService } from '../services/email.services';
import { TokenService } from '../services/token.services';

const errorMessages = {
  emailExists: 'El correo ya existe. Intente con otro.',
  errorSendingEmail: 'El email no se pudo enviar'
}

export class UserService {

  constructor (
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService,
  ) {}

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

      const emailSent = this.emailService.sendEmail({
        to: userCreated.email,
        subject: 'Confirma tu correo electrónico - UPNOTES',
        htmlBody: 'Debes validar tu cuenta, presiona aqui',
      })

      if ( !emailSent ) throw CustomError.internalServerError( errorMessages.errorSendingEmail ) 

      return {
        user: restUserEntity,
      }

    } catch (error) {
      throw CustomError.internalServerError(`${error}`)
    }

  } 

}