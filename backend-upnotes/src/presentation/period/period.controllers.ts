import { Request, Response } from "express";
import { PeriodService } from "./period.services";
import { CustomError } from "../../domain/errors/custom.error";

export class PeriodController {

  constructor(
    private readonly periodService: PeriodService
  ){}

  private handleErrorResponse( error: unknown, res: Response ) {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json({ error: error.message })
    }
      
    console.log(error)
    return res.status(500).json({ error: 'Internal server error'} )

  }

  public getAllPeriods = ( _: Request, res: Response ): any => {
    this.periodService.getPeriods()
      .then( data => res.status(200).json(data))
      .catch( err => this.handleErrorResponse( err, res))
  }

}