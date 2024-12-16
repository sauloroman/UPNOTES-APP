import { MessageResponse } from "../entities";
import { CourseAction, CoursesResponse, CreateCourse, UpdateCourse } from "../entities/course";

export abstract class CourseRepository {

  abstract createCourse( createCourse: CreateCourse ): Promise<MessageResponse>
  abstract updateCourse( courseId: string, updateCourse: UpdateCourse ): Promise<CourseAction>
  abstract getCoursesByUser( category: string, period?: string ): Promise<CoursesResponse>

}