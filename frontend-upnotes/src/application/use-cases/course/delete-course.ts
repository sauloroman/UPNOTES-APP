import { CourseRepository } from '../../../domain/repositories/course.repository';

interface Options {
  courseRepository: CourseRepository
}

export class DeleteCourseUseCase {

  private readonly courseRepository: CourseRepository

  constructor({courseRepository}: Options){
    this.courseRepository = courseRepository
  }

  public async apply( courseId: string ) {
    const { msg } = await this.courseRepository.deleteCourse( courseId )
    return msg
  }

}