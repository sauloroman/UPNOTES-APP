import { AlertType } from '../../../../application';
import { GetCoursesByUserUseCase } from '../../../../application/use-cases/course/get-courses-by-user';
import { UpdateCourseUseCase } from '../../../../application/use-cases/course/update-course';
import {
  UpdateCourse,
  GetCoursesByUser,
} from '../../../../domain/entities/course';
import { axiosError } from '../../../errors/axios.error';
import { axiosCourseRepository } from '../../../repositories/axios-course.repository';
import { setAlert } from '../../slices/alert.slice';
import { setIsLoading } from '../../slices/loading.slice';
import { setTotalOfPages } from '../../slices/pagination.slice';
import { setCourses } from '../../slices/user.slice';
import { AppThunk } from '../../store';

export const updateCourseThunk = (
  courseId: string,
  updateCourse: UpdateCourse,
  getCoursesByUser: GetCoursesByUser
): AppThunk => {
  return async (dispatch) => {
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };
    dispatch(setIsLoading(true));

    try {
      const { msg } = await new UpdateCourseUseCase({
        courseRepository: axiosCourseRepository,
      }).apply(courseId, updateCourse);
      
      const { courses, totalPagesForThisCategory } =
        await new GetCoursesByUserUseCase({
          courseRepository: axiosCourseRepository,
        }).apply(getCoursesByUser);

      alert.title = 'Curso actualizado';
      alert.description = msg;

      dispatch(setCourses(courses));
      dispatch(
        setTotalOfPages({
          name: 'courses',
          totalOfPages: totalPagesForThisCategory,
        })
      );
    } catch (error) {
      console.log(`${error}`);
      const errorMessage = axiosError(error);
      alert.title = 'No fue posible actualizar el curso';
      alert.description = errorMessage;
      alert.type = AlertType.error;
    }

    dispatch(setIsLoading(false));
    dispatch(setAlert({ alert, isAlertShown: true }));
  };
};
