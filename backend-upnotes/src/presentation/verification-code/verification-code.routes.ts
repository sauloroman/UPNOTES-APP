import { Router } from "express";
import { codeGenerator } from "../../config/utils/generate-code.util";
import { VerificationCodeService } from "./verification-code.services";
import { VerificationCodeController } from "./verification-code.controllers";

export class VerificationCodeRoutes {

  public static get routes(): Router {

    const router = Router();

    const verificationCodeService = new VerificationCodeService({ 
      generatorCode: codeGenerator
    })
    const verificationCodeController = new VerificationCodeController({ verificationCodeService })

    router.get('/regenerate', verificationCodeController.regenerateVerificationCode )

    return router

  }

}