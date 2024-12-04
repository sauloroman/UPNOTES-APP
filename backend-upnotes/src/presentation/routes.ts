import { Router } from "express";
import { UserRoutes } from "./users/users.routes";

export class RouterApp {

  public static get routes(): Router {

    const router = Router();

    router.use('/api/users', UserRoutes.routes )

    return router;

  }

}