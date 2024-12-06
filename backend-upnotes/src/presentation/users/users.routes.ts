import { Router } from 'express';
import {
  envs,
  codeGenerator,
  jwtGenerator,
  emailTemplateFactory,
  bcryptAdapter,
} from '../../config';
import { UsersController } from './users.controller';
import { UserService } from './users.services';
import {
  EmailService,
  EncriptionService,
  TokenService,
  VerificationCodeService,
} from '../services';

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

    const tokenService = new TokenService({ jwtGenerator });

    const encripterService = new EncriptionService({ encripter: bcryptAdapter });

    const verificationCodeService = new VerificationCodeService({
      codeGenerator,
      codeDurationMin: envs.VERIFICATION_CODE_DURATION_MIN,
    });

    const userService = new UserService({
      emailService,
      tokenService,
      verificationCodeService,
      encripterService,
    });

    const userController = new UsersController(userService);

    router.post('/', userController.registerUser);

    return router;
  }
}
