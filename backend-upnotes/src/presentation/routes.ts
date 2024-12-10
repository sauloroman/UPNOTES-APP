import { Router } from "express";
import { UserRoutes } from "./users/users.routes";
import { VerificationCodeRoutes } from "./verification-code/verification-code.routes";
import { AuthRoutes } from "./auth/auth.routes";

export class RouterApp {

  public static get routes(): Router {

    const router = Router();

    router.use('/api/auth', AuthRoutes.routes )

    return router;

  }

}