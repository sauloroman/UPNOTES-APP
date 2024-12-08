import { LoginUser, RegisterUser, User, ValidateUser } from '../entities';

export abstract class UserRepository {
  abstract register( user: RegisterUser ): Promise<string>;
  abstract login( user: LoginUser ): Promise<{ msg: string, user: User, token: string }>
  abstract validate( validateUser: ValidateUser ): Promise<{ msg: string, user: User, token: string }>;
}
