import { prisma } from '../../data';
import { UserEntity } from '../../domain/entities/user.entity';
import { RegisterAccount } from '../../domain/dtos/auth/register-account.dto';

export class UserService {

  public async getUserByEmail(email: string): Promise<UserEntity | null> {
    const user = await prisma.user.findUnique({ where: { email } }); 
    if ( !user ) return null

    const profile = await prisma.profile.findUnique({ where: { userId: user.id } })
    if ( !profile ) return null

    const userEntity = UserEntity.fromObject({ ...user, profile: profile.id });
    return userEntity
  } 

  public async getUserById( userId: string ): Promise<UserEntity | null> {
    const user = await prisma.user.findUnique({ where: { id: userId } }); 
    if ( !user ) return null

    const profile = await prisma.profile.findUnique({ where: { userId: user.id } })
    if ( !profile ) return null

    const userEntity = UserEntity.fromObject({ ...user, profile: profile.id });
    return userEntity
  }

  public async isUserInDataBase( userId: string ): Promise<boolean> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if ( !user ) return false
    return true 
  }

  public async postUser( registerAuth: RegisterAccount ) {
    const user = await prisma.user.create({ data: registerAuth })
    const profile = await prisma.profile.create({ data: { userId: user.id } })
    const userEntity = UserEntity.fromObject({ ...user, profile });
    return userEntity
  }

  public async updateUser( userId: string, newData: {[key: string]: any} ): Promise<UserEntity | null> {
    const { isActive, ...restNewData } = newData
    
    if ( !(await this.isUserInDataBase( userId )) ) return null;

    const userUpdated = await prisma.user.update({
      where: { id: userId },
      data: { ...restNewData },
    });

    const profile = await prisma.profile.findUnique({ where: { userId }})
    if (!profile) return null

    const userEntity = UserEntity.fromObject({ ...userUpdated, profile: profile.id });

    return userEntity
  } 

}
