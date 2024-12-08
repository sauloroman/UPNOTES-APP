import { LoginUser } from '../../../domain/entities';
import { UserRepository } from '../../../domain/repositories/user.repository';

interface Options {
  userRepository: UserRepository
}

export class LoginUserUseCase {
  private readonly userRepository: UserRepository
  
  constructor({ userRepository }: Options){
    this.userRepository = userRepository
  }

  public async create( loginUser: LoginUser ) {
    const {msg, token, user} = await this.userRepository.login( loginUser )
    return { msg, token, user }
  }

}