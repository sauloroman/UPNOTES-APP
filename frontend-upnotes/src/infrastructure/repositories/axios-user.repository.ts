import { RegisterUser, User, ValidateUser } from '../../domain/entities';
import { UserRepository } from '../../domain/repositories/user.repository';
import { axiosInstance } from '../http/axiosInstance';

export class AxiosUserRepository implements UserRepository {

  async register(user: RegisterUser): Promise<string> {
    const { data } = await axiosInstance.post('/users', user)  
    return data.msg;
  }

  async validate(validateUser: ValidateUser): Promise<{ msg: string; user: User; }> {
    const { data } = await axiosInstance.post('/users/validate-account', validateUser)
    return {
      msg: data.msg,
      user: data.user
    }
  }

}