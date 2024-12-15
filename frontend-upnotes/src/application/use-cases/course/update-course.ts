import { CourseAction, UpdateCourse } from '../../../domain/entities/course';
import { CourseRepository } from "../../../domain/repositories/course.repository";

interface Options {
  courseRepository: CourseRepository
}

export class UpdateCourseUseCase {

  private readonly courseRepository: CourseRepository

  constructor({ courseRepository }: Options) {
    this.courseRepository = courseRepository
  }

  public async apply( courseId: string, updateCourse: UpdateCourse ): Promise<CourseAction> {
    const res = await this.courseRepository.updateCourse( courseId, updateCourse )
    return res
  }

}