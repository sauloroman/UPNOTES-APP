import { NextFunction, Request, Response } from 'express';

export enum CategoryEntities {
  courses = 'courses',
  work = 'work',
}

export enum CourseCategories {
  todo = 'Todo',
  ciencia = 'Ciencia',
  matematicas = 'Matemáticas',
  programacion = 'Programación',
  ingenieria = 'Ingeniería',
  idiomas = 'Idiomas',
  humanidades = 'Humanidades',
  arte = 'Arte',
  deporte = 'Deporte',
  economia = 'Economía',
  otro = 'Otro'
}

export class CategoriesMiddleware {
  public static validateEntity(
    req: Request,
    res: Response,
    next: NextFunction
  ): any | null {
    const { entity } = req.query;

    try {
      if (!entity) {
        return res.status(400).json({ error: 'No se encuentra la entidad a buscar' })
      }

      switch (entity) {
        case 'courses':
          req.body.categoryFor = CategoryEntities.courses;
          break
        case 'work':
          req.body.categoryFor = CategoryEntities.work;
          break
        default:
          return res.status(400).json({ error: 'No existe la entidad de busqueda'})
      }

      next();
    } catch (error) {
      throw error;
    }
  }

  public static validateCourseCategory( req: Request, _: Response, next: NextFunction ): any | null {

    const { category } = req.query

    switch( category ) {
      case 'ciencia':
        req.body.courseCategory = CourseCategories.ciencia
        break
      case 'matematicas':
        req.body.courseCategory = CourseCategories.matematicas
        break
      case 'programacion':
        req.body.courseCategory = CourseCategories.programacion
        break
      case 'ingenieria':
        req.body.courseCategory = CourseCategories.ingenieria
        break
      case 'idiomas':
        req.body.courseCategory = CourseCategories.idiomas
        break
      case 'humanidades':
        req.body.courseCategory = CourseCategories.humanidades
        break
      case 'arte':
        req.body.courseCategory = CourseCategories.arte
        break
      case 'deporte':
        req.body.courseCategory = CourseCategories.deporte
        break
      case 'economia':
        req.body.courseCategory = CourseCategories.economia
        break
      case 'otro':
        req.body.courseCategory = CourseCategories.otro
        break
      default:
        req.body.courseCategory = CourseCategories.todo
        break;
    }

    next()

  }
}
