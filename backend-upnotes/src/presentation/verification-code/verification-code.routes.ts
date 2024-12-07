import { Router } from "express";
import { VerificationCodeService } from "./verification-code.services";
import { codeGenerator, dateFormatter, emailTemplateFactory, envs, jwtGenerator } from "../../config";
import { VerificationCodeController } from "./verification-code.controllers";
import { EmailService, TokenService } from "../services";
import { UserMiddleware } from "../middlewares/user.middleware";

export class VerificationCodeRoutes {

  public static get routes(): Router {
    const router = Router()

    const emailService = new EmailService({
      emailTemplateFactory: emailTemplateFactory,
      mailerEmail: envs.MAILER_EMAIL,
      mailerService: envs.MAILER_SERVICE,
      postToProvider: envs.SEND_EMAIL,
      senderEmailPassword: envs.MAILER_SECRET_KEY,
    })

    const verificationCodeService = new VerificationCodeService({
      dateFormatter: dateFormatter,
      generatorCode: codeGenerator,
      tokenService: new TokenService({ jwtGenerator }),
      emailService: emailService
    })

    const verificationCodeController = new VerificationCodeController({
      verificationCodeService
    })

    router.post('/new/:token', 
      UserMiddleware.validateUserEmailToken, 
      verificationCodeController.createVerificationCode 
    )

    return router
  }

}