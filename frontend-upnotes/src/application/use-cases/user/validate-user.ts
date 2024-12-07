import { ValidateUser } from '../../../domain/entities';
import { UserRepository } from '../../../domain/repositories/user.repository';

interface Options {
  userRepository: UserRepository
}

export class ValidateUserUseCase {

  private readonly userRepository: UserRepository

  constructor({ userRepository }: Options) {
    this.userRepository = userRepository
  }

  public async create( validateUser: ValidateUser ) {
    const { msg, user } = await this.userRepository.validate(validateUser)
    return { msg, user }
  }

}