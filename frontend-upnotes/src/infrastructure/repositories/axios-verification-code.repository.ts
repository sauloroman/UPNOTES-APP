import { VerificationCodeEmail } from "../../domain/entities/verification-code";
import { VerificationCodeRepository } from "../../domain/repositories/verification-code.repository";
import { axiosInstance } from "../http/axiosInstance";

export class AxiosVerificationCodeRepository implements VerificationCodeRepository {

  async generateNewVerificationCode(verificationCodeEmail: VerificationCodeEmail, token: string ): Promise<string> {
    const { data } = await axiosInstance.post(`/verification-code/new/${token}`, verificationCodeEmail )  
    return data.msg;
  }

}