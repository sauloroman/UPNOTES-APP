import { RegisterUser } from "../../../domain/entities";
import { UserRepository } from '../../../domain/repositories/user.repository';

interface Options {
  userRepository: UserRepository
}

export class RegisterUserUseCase {

  private readonly userRepository: UserRepository

  constructor({ userRepository }: Options) {
    this.userRepository = userRepository
  }

  public async create( user: RegisterUser): Promise<string> {
    const message = await this.userRepository.register(user)
    return message
  }

}