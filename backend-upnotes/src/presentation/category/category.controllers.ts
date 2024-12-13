import { Request, Response } from 'express';
import { CustomError } from '../../domain/errors/custom.error';
import { CategoryService } from './category.services';

export class CategoryController {

  constructor(
    private readonly categoryCourseService: CategoryService
  ){}

  private handleErrorResponse( error: unknown, res: Response ) {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json({ error: error.message })
    }
      
    console.log(error)
    return res.status(500).json({ error: 'Internal server error'} )

  }

  public getCategories = ( req: Request, res: Response ): any => {

    const { categoryFor } = req.body

    this.categoryCourseService.getCategories( categoryFor )
      .then( data => res.status(200).json( data ) )
      .catch( err => this.handleErrorResponse( err, res ) )
  }

} 