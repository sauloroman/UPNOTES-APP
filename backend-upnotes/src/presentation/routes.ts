import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { CoursesRoutes } from "./courses/courses.routes";
import { AuthMiddleware } from "./middlewares/auth.middleware";
import { PeriodRoutes } from "./period/period.routes";
import { CategoryRoutes } from "./category/category.routes";
import { ProfessorRoutes } from "./professors/professor.routes";

export class RouterApp {

  public static get routes(): Router {

    const router = Router();

    router.use('/api/auth', AuthRoutes.routes )
    
    router.use('/api/periods', [ AuthMiddleware.validateJWT ], PeriodRoutes.routes )
    router.use('/api/category', [ AuthMiddleware.validateJWT ], CategoryRoutes.routes )
    router.use('/api/courses', [ AuthMiddleware.validateJWT ], CoursesRoutes.routes )
    router.use('/api/professors', [ AuthMiddleware.validateJWT ], ProfessorRoutes.routes )

    return router;

  }

}