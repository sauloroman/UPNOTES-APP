import { Router } from "express";
import { ProfileService } from "./profile.services";
import { ProfileController } from "./profile.controllers";

export class ProfileRoutes {

  public static get routes(): Router {
    const router = Router();

    const profileService = new ProfileService()
    const profileController = new ProfileController({
      profileService
    })

    // router.get('/',)

    return router;
  }

}