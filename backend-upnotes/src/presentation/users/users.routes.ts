import { Router } from 'express';
import { UsersController } from './users.controller';
import { UserService } from './users.services';

export class UserRoutes {

  public static get routes(): Router {

    const router = Router()

    const userService = new UserService();
    const userController = new UsersController( userService )

    router.post('/', userController.registerUser )
    
    return router;

  }

}