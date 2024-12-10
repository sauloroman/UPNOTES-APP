import { ChangePassword } from '../../../domain/entities';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

interface Options {
  authRepository: AuthRepository
}

export class ChangePasswordUseCase {

  private readonly authRepository: AuthRepository

  constructor( { authRepository }: Options ) {
    this.authRepository = authRepository
  }

  public async apply( changePassword: ChangePassword, token: string ): Promise<string> {
    const resp = await this.authRepository.changePassword( changePassword, token )
    return resp.msg;
  }

}