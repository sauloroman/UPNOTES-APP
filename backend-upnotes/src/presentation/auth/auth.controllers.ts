import { Request, Response } from "express";
import { AuthService } from "./auth.services";
import { RegisterAccount, ValidateAccountDto, LonginUserDto, LonginAccountDto } from "../../domain/dtos";
import { CustomError } from "../../domain/errors/custom.error";
import { NewVerificationCodeAccountDto } from "../../domain/dtos/auth/new-verification-code-account.dto";

export class AuthController {

  constructor( private readonly authService: AuthService ){}

  private handleErrorResponse( error: unknown, res: Response ) {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json({ error: error.message })
    }

    console.log(`${error}`)
    res.status(500).json({ error: 'Internal Server Error' })

  }

  public registerAccount = ( req: Request, res: Response ): any => {

    const [ registerAccountDto, errorMessage ] = RegisterAccount.create( req.body )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.authService.postAccount( registerAccountDto! )
      .then( data => res.status(201).json( data ) )
      .catch( err => this.handleErrorResponse( err, res ) )

  }

  public validateAccount = ( req: Request, res: Response ): any => {
    const [ validateAccountDto, errorMessage ] = ValidateAccountDto.create( req.body )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.authService.validateAccount( validateAccountDto! )
      .then( data => res.status(200).json( data ) )
      .catch( err => this.handleErrorResponse( err, res ) )

  }

  public loginByEmailAndPassword = ( req: Request, res: Response ): any => {

    const [ loginAccountDto, errorMessage ] = LonginAccountDto.create( req.body )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.authService.loginAccount( loginAccountDto! )
      .then( data => res.status(200).json( data ) )
      .catch( err => this.handleErrorResponse( err, res ) )


  }

  public newVerificationCodeAccount = ( req: Request, res: Response ): any => {

    const { token } = req.params
    const [ newVerificationCodeAccountDto, errorMessage ] = NewVerificationCodeAccountDto.create( req.body )

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }

    this.authService.newVerificationCodeAccount( newVerificationCodeAccountDto!, token )
      .then( data => res.status(200).json( data ) )
      .catch( err => this.handleErrorResponse( err, res ) )

  }

}