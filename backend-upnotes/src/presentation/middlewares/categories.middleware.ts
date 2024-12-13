import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";

export enum CategoryEntities {
  courses = 'courses',
  work = 'work'
}

export class CategoriesMiddleware {

  public static validateEntity( req: Request, res: Response, next: NextFunction ): any | null {

    const { entity } = req.query
    
    if ( !entity ) {
      throw CustomError.badRequest('No se encuentra la entidad de búsqueda')
    }

    switch( entity ) {
      case 'courses':
        req.body.categoryFor = CategoryEntities.courses
        break;
      case 'work':
        req.body.categoryFor = CategoryEntities.work
        break;
      default:
        throw CustomError.notFound(`No existe la entidad de busqueda.`)
    }

    next();

  }


}