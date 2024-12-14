import { Course } from '@prisma/client';
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

  public async getCoursesByUser( 
    paginationDto: PaginationDto, 
    userId: string 
  ): Promise<CourseEntity[]> {

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

      const formattedCourses = courses.map( CourseEntity.fromObject )
      
      return formattedCourses
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