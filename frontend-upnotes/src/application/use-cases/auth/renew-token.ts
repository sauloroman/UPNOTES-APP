import { TokenResponse } from '../../../domain/entities';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

interface Options {
  authRepository: AuthRepository
}

export class RenewTokenUseCase {

  private readonly authRepository: AuthRepository

  constructor( { authRepository }: Options ) {
    this.authRepository = authRepository
  }

  public async apply(): Promise<TokenResponse> {
    const resp = await this.authRepository.renewToken()
    return resp
  }

}