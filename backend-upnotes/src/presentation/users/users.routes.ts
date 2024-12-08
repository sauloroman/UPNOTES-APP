import { Router } from 'express';
import {
  envs,
  codeGenerator,
  emailTemplateFactory,
  bcryptAdapter,
  jwtGenerator,
  dateFormatter
} from '../../config';
import { UsersController } from './users.controllers';
import { UserService } from './users.services';
import {
  EmailService,
  EncriptionService,
  TokenService,
} from '../services';
import { ProfileService } from '../profile/profile.services';
import { VerificationCodeService } from '../verification-code/verification-code.services';

export class UserRoutes {
  public static get routes(): Router {
    const router = Router();

    const emailService = new EmailService({
      mailerEmail: envs.MAILER_EMAIL,
      mailerService: envs.MAILER_SERVICE,
      postToProvider: envs.SEND_EMAIL,
      senderEmailPassword: envs.MAILER_SECRET_KEY,
      emailTemplateFactory: emailTemplateFactory,
    });

    const encripterService = new EncriptionService({ encripter: bcryptAdapter });

    const verificationCodeService = new VerificationCodeService({
      dateFormatter: dateFormatter,
      generatorCode: codeGenerator
    });

    const profileService = new ProfileService();

    const tokenService = new TokenService({ jwtGenerator })

    const userService = new UserService({
      emailService,
      verificationCodeService,
      profileService,
      encripterService,
      tokenService
    });

    const userController = new UsersController(userService);

    // PUBLIC ENDPOINTS
    router.post('/', userController.registerUser );
    router.post('/validate-account', userController.validateUserAccount )
    router.post('/login', userController.loginUser )

    return router;
  }
}
