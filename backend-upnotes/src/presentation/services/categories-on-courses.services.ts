import { prisma } from "../../data";

export class CategoriesOnCoursesService {

  public async postCategoryOnCourse( courseCategoryId: string, courseId: string ) {
    const categoryOnCourse = await prisma.categoriesOnCourses.create({
      data: {
        courseId,
        courseCategoryId
      }
    })
    return categoryOnCourse
  }

}