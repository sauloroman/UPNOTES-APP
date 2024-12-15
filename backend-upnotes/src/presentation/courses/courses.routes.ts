import { Router } from "express";
import { CourseService } from "./courses.services";
import { CoursesController } from "./courses.controllers";
import { PeriodService } from "../period/period.services";
import { CategoriesOnCoursesService, CourseCategoryService } from "../services";
import { CategoriesMiddleware } from "../middlewares/categories.middleware";

export class CoursesRoutes {
  public static get routes(): Router {
    const router = Router();
    
    const periodService = new PeriodService()
    const courseCategoryService = new CourseCategoryService()
    const categoriesOnCoursesService = new CategoriesOnCoursesService()
    const courseService = new CourseService({
      periodService,
      courseCategoryService,
      categoriesOnCoursesService,
    })
    const courseController = new CoursesController( courseService )

    router.post('/', courseController.createCourse )
    router.get('/', [ CategoriesMiddleware.validateCourseCategory ], courseController.getCoursesOfUser )
    router.put('/:id', courseController.updateCourse )

    return router
  }
}