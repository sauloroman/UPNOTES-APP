import { Router } from "express";
import { AuthController } from './auth.controllers';
import { AuthService } from "./auth.services";
import { UserService } from "../users/users.services";
import { EmailService, VerificationCodeService } from "../services";
import { dateFormatter, codeGenerator, envs } from "../../config";
import { UserMiddleware } from "../middlewares/user.middleware";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {

  public static get routes(): Router {
    const router = Router();

    const emailService = new EmailService({
      mailerEmail: envs.MAILER_EMAIL,
      mailerService: envs.MAILER_SERVICE,
      senderEmailPassword: envs.MAILER_SECRET_KEY,
      postToProvider: envs.SEND_EMAIL
    })
    const userService = new UserService()
    const verificationCodeService = new VerificationCodeService({
      dateFormatter,
      codeGenerator,
    })
    const authService = new AuthService({ 
      emailService,
      userService,
      verificationCodeService
    })
    const authController = new AuthController( authService )

    // PUBLIC ENDPOINTS
    router.post('/login', authController.loginByEmailAndPassword )
    router.post('/register-account', authController.registerAccount )
    router.post('/validate-account', authController.validateAccount )
    router.post('/forgot-password', authController.forgotPassword )
    router.post('/change-password/:token', authController.changePassword )
    router.post('/new-verification-code/:token', 
      [ UserMiddleware.validateUserEmailToken ], 
      authController.newVerificationCodeAccount
    )

    // PRIVATE ENDPOINTS
    router.get('/renew-token', [ AuthMiddleware.validateJWT ], authController.renewToken )

    return router;
  }

}