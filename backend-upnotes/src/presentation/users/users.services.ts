import { prisma } from '../../data';
import { CreateUserDto } from '../../domain/dtos/users/create-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';

const errorMessages = {
  emailExists: 'El correo ya existe. Intente con otro.'
}

export class UserService {

  public async postUser( createUserDto: CreateUserDto ) {

    const userExists = await prisma.user.findUnique({
      where: { email: createUserDto.email }
    })

    if ( userExists ) {
      throw CustomError.badRequest( errorMessages.emailExists )
    }

    try {
      
      const userCreated = await prisma.user.create({
        data: {...createUserDto}
      })

      const { password, ...restUserEntity } = UserEntity.fromObject( userCreated )

      return {
        user: restUserEntity
      }

    } catch (error) {
      throw CustomError.internalServerError(`${error}`)
    }

  } 

}