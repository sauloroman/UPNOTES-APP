import { Request, Response } from "express";
import { UserService } from "./users.services";
import { CreateUserDto } from '../../domain/dtos/users/create-user.dto';
import { CustomError } from "../../domain/errors/custom.error";
import { ValidateUserDto } from "../../domain/dtos";

export class UsersController {
  
  constructor(
    private readonly userService: UserService
  ){}

  private handleErrorResponse = ( error: unknown, res: Response ) => {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json({ error: error.message })
    }
      
    console.log(error)
    return res.status(500).json({ error: 'Internal server error'} )

  }

  private sendErrorMessage = ( errorMessage: string | undefined, res: Response ) => {
    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage })
    }
  }

  public registerUser = ( req: Request, res: Response ): any => {

    const [ createUserDto, errorMessage ] = CreateUserDto.create( req.body )

    this.sendErrorMessage( errorMessage, res )

    this.userService.postUser( createUserDto! )
      .then( userCreated => res.status(201).json( userCreated ) )
      .catch( error => this.handleErrorResponse( error, res ))

  }

  public validateUserAccount = ( req: Request, res: Response ): any => {

    const [ validateUserDto, errorMessage ] = ValidateUserDto.create( req.body )

    this.sendErrorMessage( errorMessage, res )

    this.userService.validateUser( validateUserDto! )
      .then()
      .catch()

  }

}