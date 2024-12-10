import { 
  LoginAccount,
  AccountResponse, 
  RegisterAccount, 
  ValidateAccount, 
  NewVerificationCode, 
  MessageResponse, 
  ForgotPassword, 
  ChangePassword, 
  TokenResponse
} from "../../domain/entities/account";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { axiosInstance, axiosInstanceProtected } from "../http/axiosInstance";

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

  async forgotPassword(forgotPassword: ForgotPassword): Promise<MessageResponse> {
    const { data } = await axiosInstance.post<MessageResponse>('auth/forgot-password', forgotPassword )
    return data
  }

  async changePassword(changePassword: ChangePassword, token: string ): Promise<MessageResponse> {
    const { data } = await axiosInstance.post(`/auth/change-password/${token}`, changePassword )
    return data
  }

  async renewToken(): Promise<TokenResponse> {
    const { data } = await axiosInstanceProtected.get<TokenResponse>('/auth/renew-token')
    return data
  }

}

export const axiosAuthRepository = new AxiosAuthRepository()
