import { ValidateAccount } from '../../../domain/entities';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

interface Options {
  authRepository: AuthRepository
}

export class ValidateAccountUseCase {

  private readonly authRepository: AuthRepository

  constructor( { authRepository }: Options ) {
    this.authRepository = authRepository
  }

  public async apply( validateAccount: ValidateAccount ) {
    const accountRes = await this.authRepository.validateAccount( validateAccount )
    return accountRes;
  }

}