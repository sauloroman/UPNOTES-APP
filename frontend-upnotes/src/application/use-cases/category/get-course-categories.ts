import { CategoriesRepository } from "../../../domain/repositories/categories.repository";

interface Options {
  categoriesRepository: CategoriesRepository
}

export class GetCourseCategoriesUseCase {

  private readonly categoriesRepository: CategoriesRepository

  constructor({ categoriesRepository }: Options) {
    this.categoriesRepository = categoriesRepository
  }

  public async apply() {
    return await this.categoriesRepository.getCourseCategories()
  }

}