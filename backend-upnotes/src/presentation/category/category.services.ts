import { prisma } from "../../data";
import { CategoryEntities } from "../middlewares/categories.middleware";

export class CategoryService {

  public async getCategories( entity: CategoryEntities ): Promise<string[]> {

    switch( entity ) {
      case CategoryEntities.courses:
        const coursesCategory = await prisma.courseCategory.findMany()
        return coursesCategory.map( courseCategory => courseCategory.name )
      default:
        return []
    }
    
  }

}