import { useEffect, useState } from "react"
import { GetCourseCategoriesUseCase } from "../../../application/use-cases/category/get-course-categories"
import { axiosCategoryRepository } from "../../../infrastructure/repositories/axios-category.repository"

export const useCategories = () => {
  
  const [courseCategories, setCourseCategories] = useState<string[]>([])

  useEffect(() => {
    getCourseCategories()
  }, [])

  const getCourseCategories = async () => {

    try {
      
      const useCase = new GetCourseCategoriesUseCase({ categoriesRepository: axiosCategoryRepository })
      const { categories } = await useCase.apply()
      setCourseCategories( categories )
        
    } catch (error) {
      console.log(`${error}`)
    }

  }

  return {
    courseCategories
  }

}