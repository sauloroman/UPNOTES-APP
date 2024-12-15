import { prisma } from '../../data';
import { CreateCourseDto } from '../../domain/dtos/courses/create-course.dto';
import { CustomError } from '../../domain/errors/custom.error';
import { PeriodService } from '../period/period.services';
import { CourseCategoryService, CategoriesOnCoursesService } from '../services';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { CourseEntity } from '../../domain/entities/corse.entity';

interface ServiceOptions {
  periodService: PeriodService;
  courseCategoryService: CourseCategoryService
  categoriesOnCoursesService: CategoriesOnCoursesService
}

export class CourseService {

  private readonly periodService: PeriodService;
  private readonly courseCategoryService: CourseCategoryService;
  private readonly categoriesOnCoursesService: CategoriesOnCoursesService;

  constructor({ periodService, courseCategoryService, categoriesOnCoursesService }: ServiceOptions){
    this.periodService = periodService
    this.courseCategoryService = courseCategoryService
    this.categoriesOnCoursesService = categoriesOnCoursesService
  }

  private async isCourseInDataBase( courseId: string ): Promise<boolean> {
    const course = await prisma.course.findUnique({ where: { id: courseId }})
    if ( !course ) return false
    return true
  }

  private async getCourseCategories( courseId: string ) {
    const courseCategories = await this.categoriesOnCoursesService.getCategoriesOnCourse( courseId )
    return courseCategories
  }

  public async updateCourse( newInformation: any, courseId: string ) {

    const { id, createdAt, userId, user, ...restNewInformation } = newInformation

    if ( !this.isCourseInDataBase(courseId) ) throw CustomError.notFound('El curso no existe')

    const courseUpdated = await prisma.course.update({
      where: { id: courseId },
      data: {
        ...restNewInformation
      },
      include: {
        period: {
          select: { numberPeriod: true }
        },
        professor: {
          select: { name: true }
        }
      }
    })

    const courseEntity = CourseEntity.fromObject( courseUpdated )

    return {
      msg: 'El curso ha sido actualizado',
      courseUpdated: courseEntity
    }

  }

  public async getCoursesByUser( 
    paginationDto: PaginationDto, 
    userId: string 
  ): Promise<any> {

    const { page, limit } = paginationDto

    try {

      const courses = await prisma.course.findMany({ 
        skip: (page - 1) * limit, 
        take: limit, 
        where: { userId },
        include: {
          period: {
            select: { numberPeriod: true }
          },
          professor: {
            select: { name: true }
          }
        }
      })

      const totalCourses = await prisma.course.count()
      const maxQuantityPages = Math.ceil( totalCourses / limit)
      
      let formattedCourses = []
      for( const course of courses ) {
        const categoriesOnCourse = await this.getCourseCategories( course.id )
        const courseEntity = CourseEntity.fromObject({ 
          ...course, 
          categories: categoriesOnCourse 
        })
        formattedCourses.push( courseEntity )
      }

      return {
        page: page,
        totalCourses: totalCourses,
        coursesInThisPage: courses.length,
        totalPages: maxQuantityPages,
        courses: formattedCourses
      }
    } catch (error) {
      throw error
    }
    
  }

  public async postCourse( createCourseDto: CreateCourseDto, userId: string ) {
    const { name, color, categories, period } = createCourseDto

    try {
      
      const periodId = await this.periodService.getPeriodByName( period )
      if ( !periodId ) throw CustomError.notFound('El periodo no existe')
  
      const newCourse = await prisma.course.create({
        data: {
          name: name,
          color: color,
          userId: userId,
          periodId: periodId
        }
      })
  
      for( const category of categories ) {
        const courseCategoryId = await this.courseCategoryService.getCourseCategoryByName( category )
        if ( !courseCategoryId ) throw CustomError.notFound('La categoria del curso no existe en la Base de Datos')
        await this.categoriesOnCoursesService.postCategoryOnCourse( courseCategoryId, newCourse.id )
      }
  
      return {
        msg: `La materia "${name}" ha sido creada exitosamente.`
      }
    } catch (error) {
      throw error
    }

  }

}