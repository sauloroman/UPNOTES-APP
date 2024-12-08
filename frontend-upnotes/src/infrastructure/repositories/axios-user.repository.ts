import { LoginUser, RegisterUser, User, ValidateUser } from '../../domain/entities';
import { UserRepository } from '../../domain/repositories/user.repository';
import { axiosInstance } from '../http/axiosInstance';

export class AxiosUserRepository implements UserRepository {

  async register(user: RegisterUser): Promise<string> {
    const { data } = await axiosInstance.post('/users/register', user)  
    return data.msg;
  }

  async login(user: LoginUser): Promise<{ msg: string; user: User; token: string; }> {
    const { data } = await axiosInstance.post('/users/login', user )
    return {
      msg: data.msg,
      user: data.user,
      token: data.token
    }
  }

  async validate(validateUser: ValidateUser): Promise<{ msg: string; user: User; token: string }> {
    const { data } = await axiosInstance.post('/users/validate-account', validateUser)
    return {
      msg: data.msg,
      user: data.user,
      token: data.token
    }
  }

}