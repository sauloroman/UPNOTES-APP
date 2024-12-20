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

  public async deleteCategoriesOnCourse( courseId: string ) {
    await prisma.categoriesOnCourses.deleteMany({ where: { courseId }})
  }

  public async getCategoriesOnCourse( courseId: string ) {
    const categoriesOnCourse = await prisma.categoriesOnCourses.findMany({
      where: {
        courseId
      }
    })

    let categoriesOnCourseNames = []

    for( const categoryOnCourse of categoriesOnCourse ) {
      const { courseCategoryId } = categoryOnCourse
      const category = await prisma.courseCategory.findUnique({ where: { id: courseCategoryId }})
      categoriesOnCourseNames.push( category?.name )
    }

    return categoriesOnCourseNames
  }

}