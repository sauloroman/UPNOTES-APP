import { MessageResponse } from '../../domain/entities';
import {
  CourseAction,
  CoursesResponse,
  CreateCourse,
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

  async getCoursesByUser(
    category: string,
    period?: string, 
    favorites?: string,
  ): Promise<CoursesResponse> {
    const { data } = await axiosInstanceProtected.get<CoursesResponse>(
      `/courses?page=1&limit=8&category=${category}&period=${period}&favorites=${favorites}`
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
}

export const axiosCourseRepository = new AxiosCourseRepository();
