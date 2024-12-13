import { Response } from "express"
import { CustomError } from "../../domain/errors/custom.error"
import { ProfileService } from "./profile.services"

interface ControllerOptions {
  profileService: ProfileService
}

export class ProfileController {

  private readonly profileService: ProfileService

  constructor({ profileService }: ControllerOptions){
    this.profileService = profileService  
  }

  private handleErrorResponse = ( error: unknown, res: Response ) => {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json({ error: error.message })
    }
      
    console.log(error)
    return res.status(500).json({ error: 'Internal server error'} )

  }

  

}