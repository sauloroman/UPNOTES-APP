import { LoginAccount, RegisterAccount, ValidateAccount, ValidateAccountResponse } from "../entities/account";

export abstract class AuthRepository {

  abstract registerAccount( registerAccount: RegisterAccount ): Promise<string>
  abstract validateAccount( validateAccount: ValidateAccount ): Promise<ValidateAccountResponse>
  // abstract loginAccount( loginAccount: LoginAccount )

}