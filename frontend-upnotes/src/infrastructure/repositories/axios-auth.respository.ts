import { LoginAccount, AccountResponse, RegisterAccount, ValidateAccount, NewVerificationCode, MessageResponse } from "../../domain/entities/account";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { axiosInstance } from "../http/axiosInstance";

export class AxiosAuthRepository implements AuthRepository  {

  async loginAccount(loginAccount: LoginAccount): Promise<AccountResponse> {
    const { data } = await axiosInstance.post<AccountResponse>('/auth/login', loginAccount )
    return data
  }

  async registerAccount(registerAccount: RegisterAccount): Promise<MessageResponse> {
    const { data } = await axiosInstance.post<MessageResponse>('/auth/register-account', registerAccount )
    return data
  }

  async validateAccount(validateAccount: ValidateAccount): Promise<AccountResponse> {
    const { data } = await axiosInstance.post<AccountResponse>('/auth/validate-account', validateAccount)
    return data
  }

  async newVerificationCode(newVerificationCode: NewVerificationCode, token: string ): Promise<MessageResponse> {
    const { data } = await axiosInstance.post<MessageResponse>(`/auth/new-verification-code/${token}`, newVerificationCode )
    return data
  }

}

export const axiosAuthRepository = new AxiosAuthRepository()
