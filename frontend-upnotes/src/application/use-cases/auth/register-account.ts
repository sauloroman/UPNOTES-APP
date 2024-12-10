import { RegisterAccount } from '../../../domain/entities';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

interface Options {
  authRepository: AuthRepository
}

export class RegisterAccountUseCase {

  private readonly authRepository: AuthRepository

  constructor( { authRepository }: Options ) {
    this.authRepository = authRepository
  }

  public async apply( registerAccount: RegisterAccount ): Promise<string> {
    const resp = await this.authRepository.registerAccount( registerAccount )
    return resp.msg;
  }

}