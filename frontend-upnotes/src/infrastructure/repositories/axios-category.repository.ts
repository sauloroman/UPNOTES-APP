import { CategoriesResponse } from "../../domain/entities/categories";
import { CategoriesRepository } from "../../domain/repositories/categories.repository";
import { axiosInstanceProtected } from "../http/axiosInstance";

export class AxiosCategoryRepository implements CategoriesRepository {

  async getCourseCategories(): Promise<CategoriesResponse> {
    const { data } = await axiosInstanceProtected.get<CategoriesResponse>('/category?entity=courses')
    return data
  }

}

export const axiosCategoryRepository = new AxiosCategoryRepository()