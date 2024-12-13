import { Router } from "express";
import { CourseService } from "./courses.services";
import { CoursesController } from "./courses.controllers";
import { CategoriesOnCoursesService, CourseCategoryService, PeriodService } from "../services";

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

    return router
  }
}