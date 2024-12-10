import { ForgotPassword } from '../../../domain/entities';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

interface Options {
  authRepository: AuthRepository
}

export class ForgotPasswordUseCase {

  private readonly authRepository: AuthRepository

  constructor( { authRepository }: Options ) {
    this.authRepository = authRepository
  }

  public async apply( forgotPassword: ForgotPassword ): Promise<string> {
    const resp = await this.authRepository.forgotPassword( forgotPassword )
    return resp.msg;
  }

}