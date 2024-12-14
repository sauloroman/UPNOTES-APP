import { MessageResponse } from "../../domain/entities";
import { CreateCourse } from "../../domain/entities/course";
import { CourseRepository } from "../../domain/repositories/course.repository"
import { axiosInstanceProtected } from "../http/axiosInstance";

export class AxiosCourseRepository implements CourseRepository {

  async createCourse(createCourse: CreateCourse): Promise<MessageResponse> {
    const { data } = await axiosInstanceProtected.post('/courses', createCourse)
    return data
  }

}

export const axiosCourseRepository = new AxiosCourseRepository()