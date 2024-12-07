import { prisma } from "../../data";

export class ProfileService {

  public async postProfile( userId: string ): Promise<string> {
    const profile = await prisma.profile.create({ data: { userId } } )
    return profile.id
  }

  public async getProfileByUserId( userId: string ) {
    const userProfile = await prisma.profile.findUnique({ where: {userId} })
    return userProfile
  }

}