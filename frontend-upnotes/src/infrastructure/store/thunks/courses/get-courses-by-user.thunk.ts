import { GetCoursesByUserUseCase } from "../../../../application/use-cases/course/get-courses-by-user";
import { axiosCourseRepository } from "../../../repositories/axios-course.repository";
import { setIsLoading } from "../../slices/loading.slice";
import { setTotalOfPages } from "../../slices/pagination.slice";
import { setCourses } from "../../slices/user.slice";
import { AppThunk } from "../../store";
import { GetCoursesByUser } from '../../../../domain/entities/course';

export const getCoursesByUserThunk = ( getCoursesByUser: GetCoursesByUser ): AppThunk => {
  return async ( dispatch ) => {

    dispatch( setIsLoading(true) )
    
    try {
      
      const useCase = new GetCoursesByUserUseCase({ courseRepository: axiosCourseRepository })
      const { courses, totalPagesForThisCategory } = await useCase.apply( getCoursesByUser )

      dispatch( setTotalOfPages({ 
        name: 'courses', 
        totalOfPages: totalPagesForThisCategory 
      }))
      
      dispatch( setCourses(courses) )

    } catch (error) {
      console.log(error)
    }

    dispatch( setIsLoading(false) )

  }
}