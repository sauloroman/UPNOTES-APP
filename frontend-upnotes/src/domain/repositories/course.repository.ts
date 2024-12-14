import { MessageResponse } from "../entities";
import { CoursesResponse, CreateCourse } from "../entities/course";

export abstract class CourseRepository {

  abstract createCourse( createCourse: CreateCourse ): Promise<MessageResponse>
  abstract getCoursesByUser(): Promise<CoursesResponse>

}