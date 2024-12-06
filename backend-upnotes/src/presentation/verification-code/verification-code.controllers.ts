import { Request, Response } from "express";
import { VerificationCodeService } from "./verification-code.services";
import { RegenerateVerificationCodeDto } from "../../domain/dtos/verification-code/regenerate-verification-code.dto";

interface ControllerOptions {
  verificationCodeService: VerificationCodeService
}

export class VerificationCodeController {

  private readonly verificationCodeService: VerificationCodeService

  constructor({ verificationCodeService }: ControllerOptions) {
    this.verificationCodeService = verificationCodeService
  }

  private handleErrorResponse( error: unknown, res: Response ) {

  }

  public regenerateVerificationCode = ( req: Request, res: Response ): any => {

    const { token } = req.params

    console.log(token)
    const [ regenerateVerificationCodeDto, errorMessage ] = RegenerateVerificationCodeDto.create( req.body )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.verificationCodeService.regenerateVerificationCode( regenerateVerificationCodeDto! )
      .then()
      .catch()

  }

}