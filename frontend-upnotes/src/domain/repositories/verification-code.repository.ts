import { VerificationCodeEmail } from "../entities/verification-code";

export abstract class VerificationCodeRepository {
  abstract generateNewVerificationCode( verificationCodeEmail: VerificationCodeEmail, token: string ): Promise<string>
}