import { prisma } from "../../data";
import { CategoryEntities } from "../middlewares/categories.middleware";

export class CategoryService {

  public async getCategories( entity: CategoryEntities ): Promise<{ categories: string[] }> {

    switch( entity ) {
      case CategoryEntities.courses:
        const coursesCategory = await prisma.courseCategory.findMany()
        return { categories: coursesCategory.map( courseCategory => courseCategory.name ) }
      default:
        return { categories: [] }
    }
    
  }

}