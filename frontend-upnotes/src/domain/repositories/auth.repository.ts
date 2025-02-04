import { MessageResponse } from "../entities";
import { 
  AccountResponse, 
  ChangePassword, 
  ForgotPassword, 
  LoginAccount, 
  NewVerificationCode, 
  RegisterAccount, 
  TokenResponse, 
  ValidateAccount 
} from "../entities/account";

export abstract class AuthRepository {

  abstract registerAccount( registerAccount: RegisterAccount ): Promise<MessageResponse>
  abstract validateAccount( validateAccount: ValidateAccount ): Promise<AccountResponse>
  abstract loginAccount( loginAccount: LoginAccount ): Promise<AccountResponse>
  abstract newVerificationCode( newVerificationCode: NewVerificationCode, token: string ): Promise<MessageResponse>
  abstract forgotPassword( forgotPassword: ForgotPassword ): Promise<MessageResponse>
  abstract changePassword( changePassword: ChangePassword, token: string ): Promise<MessageResponse>
  abstract renewToken(): Promise<TokenResponse> 

}