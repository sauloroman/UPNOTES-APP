import { RegisterUser } from "../../../domain/entities";
import { UserRepository } from '../../../domain/repositories/user.repository';

export class RegisterUserUseCase {

  public static async create(userRepository: UserRepository, user: RegisterUser): Promise<string> {
    const message = await userRepository.register(user)
    return message
  }

}