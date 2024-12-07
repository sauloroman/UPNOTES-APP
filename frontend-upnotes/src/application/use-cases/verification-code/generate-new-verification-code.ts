import { VerificationCodeRepository } from "../../../domain/repositories/verification-code.repository";
import { VerificationCodeEmail } from '../../../domain/entities/verification-code';

interface Options {
  verificationCodeRepository: VerificationCodeRepository
}

export class GenerateNewVerificationCodeUseCase {

  private readonly verificationCodeRepository: VerificationCodeRepository

  constructor({ verificationCodeRepository }: Options){
    this.verificationCodeRepository =verificationCodeRepository
  }

  public async create( verificationCodeEmail: VerificationCodeEmail, token: string ) {
    const msg = await this.verificationCodeRepository.generateNewVerificationCode( verificationCodeEmail, token )
    return msg;
  }

}