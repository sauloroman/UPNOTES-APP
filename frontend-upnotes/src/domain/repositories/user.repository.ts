import { RegisterUser, User, ValidateUser } from '../entities';

export abstract class UserRepository {
  abstract register( user: RegisterUser ): Promise<string>;
  abstract validate( validateUser: ValidateUser ): Promise<{ msg: string, user: User}>;
}
