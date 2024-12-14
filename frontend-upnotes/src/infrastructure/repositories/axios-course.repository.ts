import { MessageResponse } from "../../domain/entities";
import { CoursesResponse, CreateCourse } from "../../domain/entities/course";
import { CourseRepository } from "../../domain/repositories/course.repository"
import { axiosInstanceProtected } from "../http/axiosInstance";

export class AxiosCourseRepository implements CourseRepository {

  async createCourse(createCourse: CreateCourse): Promise<MessageResponse> {
    const { data } = await axiosInstanceProtected.post('/courses', createCourse)
    return data
  }

  async getCoursesByUser(): Promise<CoursesResponse> {
    const { data } = await axiosInstanceProtected.get<CoursesResponse>('/courses?page=1&limit=8')
    return data
  }

}

export const axiosCourseRepository = new AxiosCourseRepository()