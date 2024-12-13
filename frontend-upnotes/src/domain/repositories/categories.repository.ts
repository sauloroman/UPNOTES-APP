import { CategoriesResponse } from "../entities/categories";

export abstract class CategoriesRepository {

  abstract getCourseCategories(): Promise<CategoriesResponse>

}