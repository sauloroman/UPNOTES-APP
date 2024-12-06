import { Router } from "express";
import { codeGenerator } from "../../config/utils/generate-code.util";
import { VerificationCodeService } from "./verification-code.services";
import { VerificationCodeController } from "./verification-code.controllers";
import { dateFormatter } from "../../config/utils/format-dates.util";

export class VerificationCodeRoutes {

  public static get routes(): Router {

    const router = Router();

    const verificationCodeService = new VerificationCodeService({ 
      dateFormatter: dateFormatter,
      generatorCode: codeGenerator
    })
    const verificationCodeController = new VerificationCodeController({ verificationCodeService })

    router.get('/regenerate/:token', verificationCodeController.regenerateVerificationCode )

    return router

  }

}