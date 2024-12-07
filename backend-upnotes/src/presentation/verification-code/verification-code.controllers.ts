import { Request, Response } from "express";
import { VerificationCodeService } from "./verification-code.services";
import { CustomError } from "../../domain/errors/custom.error";
import { CreateVerificationCodeDto } from "../../domain/dtos";

interface ControllerOptions {
  verificationCodeService: VerificationCodeService
}

export class VerificationCodeController {

  private readonly verificationCodeService: VerificationCodeService

  constructor({verificationCodeService}: ControllerOptions){
    this.verificationCodeService = verificationCodeService
  }

  private handleErrorResponse( error: unknown, res: Response ) {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json({ error: error.message })
    }

    console.log(`${error}`)
    res.status(500).json({ error: 'Internal Server Error'})

  }

  public createVerificationCode = ( req: Request, res: Response): any => {

    const { token } = req.params

    const [ createVerificationCodeDto, errorMessage ] = CreateVerificationCodeDto.create( req.body )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.verificationCodeService.generateVerificationCode(token, createVerificationCodeDto! )
      .then( data => res.status(201).json( data ) )
      .catch( error => this.handleErrorResponse( error, res ) )

  }

}