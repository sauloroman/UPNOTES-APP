import { bcryptAdapter, jwtGenerator } from '../../config';
import { prisma } from '../../data';
import { CreateUserDto } from '../../domain/dtos/users/create-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';

const errorMessages = {
  emailExists: 'El correo ya existe. Intente con otro.',
  tokenNoGenerated: 'Error creando el Token. Intente de nuevo más tarde',
}

export class UserService {

  private async generateToken( payload: any ) {
    const token = await jwtGenerator.generateToken({ payload })

    if ( !token ) {
      throw CustomError.internalServerError(errorMessages.tokenNoGenerated)
    }

    return token
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
        createdAt: new Date().toLocaleDateString(),
      }})
      
      await prisma.profile.create({ data: { userId: userCreated.id }})

      const { password, ...restUserEntity } = UserEntity.fromObject( userCreated )

      return {
        user: restUserEntity,
      }

    } catch (error) {
      throw CustomError.internalServerError(`${error}`)
    }

  } 

}