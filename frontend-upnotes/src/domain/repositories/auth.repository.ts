import { 
  AccountResponse, 
  LoginAccount, 
  MessageResponse, 
  NewVerificationCode, 
  RegisterAccount, 
  ValidateAccount 
} from "../entities/account";

export abstract class AuthRepository {

  abstract registerAccount( registerAccount: RegisterAccount ): Promise<MessageResponse>
  abstract validateAccount( validateAccount: ValidateAccount ): Promise<AccountResponse>
  abstract loginAccount( loginAccount: LoginAccount ): Promise<AccountResponse>
  abstract newVerificationCode( newVerificationCode: NewVerificationCode, token: string ): Promise<MessageResponse>

}