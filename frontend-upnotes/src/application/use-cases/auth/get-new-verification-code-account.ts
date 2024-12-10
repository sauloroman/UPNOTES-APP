import { NewVerificationCode } from '../../../domain/entities';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

interface Options {
  authRepository: AuthRepository
}

export class GetNewVerificationCodeAccount {

  private readonly authRepository: AuthRepository

  constructor( { authRepository }: Options ) {
    this.authRepository = authRepository
  }

  public async apply( newVerificationCode: NewVerificationCode, token: string ): Promise<string> {
    const resp = await this.authRepository.newVerificationCode( newVerificationCode, token )
    return resp.msg;
  }

}