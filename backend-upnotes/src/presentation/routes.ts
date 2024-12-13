import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { CoursesRoutes } from "./courses/courses.routes";
import { AuthMiddleware } from "./middlewares/auth.middleware";

export class RouterApp {

  public static get routes(): Router {

    const router = Router();

    router.use('/api/auth', AuthRoutes.routes )
    router.use('/api/courses', [ AuthMiddleware.validateJWT ], CoursesRoutes.routes )

    return router;

  }

}