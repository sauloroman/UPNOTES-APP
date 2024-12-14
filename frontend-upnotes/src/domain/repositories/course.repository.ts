import { MessageResponse } from "../entities";
import { CreateCourse } from "../entities/course";

export abstract class CourseRepository {

  abstract createCourse( createCourse: CreateCourse ): Promise<MessageResponse>

}