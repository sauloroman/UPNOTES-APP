import { LoginAccount } from '../../../domain/entities';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

interface Options {
  authRepository: AuthRepository
}

export class LoginAccountUseCase {

  private readonly authRepository: AuthRepository

  constructor( { authRepository }: Options ) {
    this.authRepository = authRepository
  }

  public async apply( loginAccount: LoginAccount ) {
    const accountRes = await this.authRepository.loginAccount( loginAccount )
    return accountRes;
  }

}