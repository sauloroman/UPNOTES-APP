import { Request, Response } from "express";
import { UserService } from "./users.services";
import { CustomError } from "../../domain/errors/custom.error";

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

}