import { prisma } from "../../data";

export class ProfileService {

  public async postProfile( userId: string ): Promise<string> {
    const profile = await prisma.profile.create({ data: { userId } } )
    return profile.id
  }

  public async getAllProfiles() {

  }

}