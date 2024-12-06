import { ProfileService } from "./profile.services"

interface ControllerOptions {
  profileService: ProfileService
}

export class ProfileController {

  private readonly profileService: ProfileService

  constructor({ profileService }: ControllerOptions){
    this.profileService = profileService  
  }

}