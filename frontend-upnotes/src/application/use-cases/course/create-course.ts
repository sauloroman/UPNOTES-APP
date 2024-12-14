import { MessageResponse } from "../../../domain/entities";
import { CreateCourse } from "../../../domain/entities/course";
import { CourseRepository } from "../../../domain/repositories/course.repository";

interface Options {
  courseRepository: CourseRepository
}

export class CreateCourseUseCase {

  private readonly courseRepository: CourseRepository

  constructor({ courseRepository }: Options) {
    this.courseRepository = courseRepository
  }

  public async apply( createCourse: CreateCourse ): Promise<MessageResponse> {
    const msg = await this.courseRepository.createCourse( createCourse )
    return msg
  }

}