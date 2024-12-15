import { CourseRepository } from "../../../domain/repositories/course.repository";

interface Options {
  courseRepository: CourseRepository
}

export class GetCoursesByUserUseCase {

  private readonly courseRepository: CourseRepository

  constructor({ courseRepository }: Options) {
    this.courseRepository = courseRepository
  }

  public async apply( category: string ) {
    const coursesRes = await this.courseRepository.getCoursesByUser( category )
    return coursesRes
  }

}