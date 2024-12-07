import { RegisterUser } from '../../domain/entities';
import { UserRepository } from '../../domain/repositories/user.repository';
import { axiosInstance } from '../http/axiosInstance';

export class AxiosUserRepository implements UserRepository {

  async register(user: RegisterUser): Promise<string> {
    const { data } = await axiosInstance.post('/users', user)  
    return data.msg;
  }

}