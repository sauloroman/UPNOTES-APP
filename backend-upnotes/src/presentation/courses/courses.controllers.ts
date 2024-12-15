import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { CourseService } from "./courses.services";
import { CreateCourseDto } from "../../domain/dtos";
import { PaginationDto } from "../../domain/dtos/shared/pagination.dto";

export class CoursesController {

  constructor(
    private readonly courseService: CourseService
  ){}

  private handleErrorResponse( error: unknown, res: Response ) {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json({ error: error.message })
    }

    console.log(`${error}`)
    res.status(500).json({ error })

  }

  public createCourse = ( req: Request, res: Response ): any => {

    const { user } = req.body
    const [ createCourseDto, errorMessage ] = CreateCourseDto.create( req.body )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.courseService.postCourse( createCourseDto!, user.id )
      .then( data => res.status(201).json( data ) )
      .catch( err => this.handleErrorResponse( err, res ))

  }

  public getCoursesOfUser = ( req: Request, res: Response ): any => {

    const { page = 1, limit = 8 } = req.query
    const { user } = req.body

    const [ paginationDto, errorMessage ] = PaginationDto.create( +page, +limit )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.courseService.getCoursesByUser( paginationDto!, user.id )
      .then( courses => res.status(200).json( courses )) 
      .catch( err => this.handleErrorResponse( err, res ) )

  }

  public updateCourse = ( req: Request, res: Response ): any => {

    const { id } = req.params

    this.courseService.updateCourse( req.body, id )
      .then( data => res.status(200).json(data))
      .catch( err => this.handleErrorResponse( err, res ))

  }

} 