import { Request, Response } from 'express';
import { CustomError } from '../../domain/errors/custom.error';
import { ProfessorService } from './professors.services';
import { CreateProfessorDto } from '../../domain/dtos/professors/create-professor.dto';

export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  private handleErrorResponse(error: unknown, res: Response) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }

  public createProfessor = ( req: Request, res: Response ): any => {

    const { user } = req.body
    const [ createProfessorDto, errorMessage ] = CreateProfessorDto.create( req.body )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.professorService.postProfessor( createProfessorDto!, user.id )
      .then( data => res.status(201).json( data ) )
      .catch( err => this.handleErrorResponse( err, res ) )

  }

  public getProfessors = ( req: Request, res: Response ): any => {

    const { user } = req.body

    this.professorService.getProfessorsByUser( user.id )
      .then( data => res.status(200).json( data ) )
      .catch( err => this.handleErrorResponse( err, res ) )

  }

}