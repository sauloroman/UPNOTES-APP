import { prisma } from "../../data";

export class CourseCategoryService {

  public async getCourseCategoryByName( name: string ): Promise<string | null> {
    const courseCategory = await prisma.courseCategory.findFirst({ where: { name }})
    if ( !courseCategory ) return null
    return courseCategory.id
  }

}