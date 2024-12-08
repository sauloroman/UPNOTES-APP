import { prisma } from '../../data';
import { UserEntity } from '../../domain/entities/user.entity';
import { User } from '@prisma/client';
import { RegisterAccount } from '../../domain/dtos/auth/register-account.dto';

export class UserService {

  public async getUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { email } });
  } 

  public async postUser( registerAuth: RegisterAccount ) {
    const user = await prisma.user.create({ data: registerAuth })
    const profile = await prisma.profile.findUnique({ where: { userId: user.id } })
    const { password, ...restUserEntity } = UserEntity.fromObject({ ...user, profile });
    return restUserEntity
  }

  public async updateUser( userId: string, newData: {[key: string]: any} ) {
    const { password, isActive, ...restNewData } = newData
    
    const userUpdated = await prisma.user.update({
      where: { id: userId },
      data: { ...restNewData },
    });

    const profile = await prisma.profile.findUnique({ where: { userId }})
    const { password: p, ...restUserEntity } = UserEntity.fromObject({ ...userUpdated, profile });

    return restUserEntity
  } 

}
