import { AlertType } from "../../../../application";
import { CreateCourseUseCase } from "../../../../application/use-cases/course/create-course";
import { GetCoursesByUserUseCase } from "../../../../application/use-cases/course/get-courses-by-user";
import { CreateCourse, GetCoursesByUser } from "../../../../domain/entities/course";
import { axiosError } from "../../../errors/axios.error";
import { axiosCourseRepository } from "../../../repositories/axios-course.repository";
import { setAlert } from "../../slices/alert.slice";
import { setIsLoading } from "../../slices/loading.slice";
import { setTotalOfPages } from "../../slices/pagination.slice";
import { setCourses } from "../../slices/user.slice";
import { AppThunk } from "../../store";

export const createCourseThunk = ( createCourse: CreateCourse, getCoursesByUser: GetCoursesByUser ): AppThunk => {
  return async ( dispatch ) => {
    
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    dispatch( setIsLoading(true) )

    try {
      
      const successMessage = await new CreateCourseUseCase({ courseRepository: axiosCourseRepository }).apply( createCourse )
      const { courses, totalPagesForThisCategory } = await new GetCoursesByUserUseCase({ courseRepository: axiosCourseRepository }).apply(getCoursesByUser)

      alert.title = 'Curso creado'
      alert.description = successMessage.msg

      dispatch( setTotalOfPages( { name: 'courses', totalOfPages: totalPagesForThisCategory } ) )
      dispatch( setCourses( courses ) )
    } catch (error) {
      console.log(`${error}`)
      const errorMessage = axiosError( error )
      alert.title = 'No fue posible crear el curso';
      alert.description = errorMessage;
      alert.type = AlertType.error  
    }

    dispatch( setIsLoading(false) )
    dispatch( setAlert({ alert, isAlertShown: true }) )
  }
} 