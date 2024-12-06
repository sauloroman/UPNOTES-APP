import { Router } from 'express';
import { envs, jwtGenerator } from '../../config';
import { UsersController } from './users.controller';
import { UserService } from './users.services';
import { EmailService } from '../services/email.services';
import { TokenService } from '../services';

export class UserRoutes {

  public static get routes(): Router {

    const router = Router()

    const emailService = new EmailService({
      mailerEmail: envs.MAILER_EMAIL,
      mailerService: envs.MAILER_SERVICE,
      postToProvider: envs.SEND_EMAIL,
      senderEmailPassword: envs.MAILER_SECRET_KEY,
    })

    const tokenService = new TokenService({ jwtGenerator })

    const userService = new UserService( emailService, tokenService );
    const userController = new UsersController( userService )

    router.post('/', userController.registerUser )
    
    return router;

  }

}