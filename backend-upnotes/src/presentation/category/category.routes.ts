import { Router } from "express";
import { CategoryController } from "./category.controllers";
import { CategoryService } from "./category.services";
import { CategoriesMiddleware } from "../middlewares/categories.middleware";

export class CategoryRoutes {

  public static get routes(): Router {
    const router = Router()

    const categoryService =  new CategoryService()
    const categoryController = new CategoryController( categoryService ) 
    
    router.get('/', [ CategoriesMiddleware.validateEntity ], categoryController.getCategories )

    return router;
  }

}