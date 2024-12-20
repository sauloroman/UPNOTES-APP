import { MessageResponse } from '../../domain/entities';
import {
  CourseAction,
  CoursesResponse,
  CreateCourse,
  GetCoursesByUser,
  UpdateCourse,
} from '../../domain/entities/course';
import { CourseRepository } from '../../domain/repositories/course.repository';
import { axiosInstanceProtected } from '../http/axiosInstance';

export class AxiosCourseRepository implements CourseRepository {
  async createCourse(createCourse: CreateCourse): Promise<MessageResponse> {
    const { data } = await axiosInstanceProtected.post(
      '/courses',
      createCourse
    );
    return data;
  }

  async getCoursesByUser( { page, category, favorites, period}: GetCoursesByUser ): Promise<CoursesResponse> {
    const { data } = await axiosInstanceProtected.get<CoursesResponse>(
      `/courses?page=${page}&limit=8&category=${category}&period=${period}&favorites=${favorites}`
    );
    return data;
  }

  async updateCourse(
    courseId: string,
    updateCourse: UpdateCourse
  ): Promise<CourseAction> {
    const { data } = await axiosInstanceProtected.put<CourseAction>(
      `/courses/${courseId}`,
      updateCourse
    );
    return data;
  }

  async deleteCourse(courseId: string): Promise<MessageResponse> {
    const { data } = await axiosInstanceProtected.delete<MessageResponse>(`/courses/${courseId}`)
    return data
  }
}

export const axiosCourseRepository = new AxiosCourseRepository();
