import { Router } from "express";
import { UserRoutes } from "./users/users.routes";
import { VerificationCodeRoutes } from "./verification-code/verification-code.routes";

export class RouterApp {

  public static get routes(): Router {

    const router = Router();

    router.use('/api/users', UserRoutes.routes )
    router.use('/api/verification-code', VerificationCodeRoutes.routes )

    return router;

  }

}