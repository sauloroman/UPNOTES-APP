import { MessageResponse } from "../entities";
import { CourseAction, CoursesResponse, CreateCourse, GetCoursesByUser, UpdateCourse } from "../entities/course";

export abstract class CourseRepository {

  abstract createCourse( createCourse: CreateCourse ): Promise<MessageResponse>
  abstract updateCourse( courseId: string, updateCourse: UpdateCourse ): Promise<CourseAction>
  abstract getCoursesByUser( getCoursesByUser: GetCoursesByUser ): Promise<CoursesResponse>
  abstract deleteCourse( courseId: string ): Promise<MessageResponse>

}