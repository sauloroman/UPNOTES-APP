import { RegisterUser } from '../entities';

export abstract class UserRepository {
  abstract register( user: RegisterUser ): Promise<string>;
}
