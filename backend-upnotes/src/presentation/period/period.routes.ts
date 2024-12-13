import { Router } from "express";
import { PeriodService } from "./period.services";
import { PeriodController } from "./period.controllers";

export class PeriodRoutes {

  public static get routes(): Router {
    const router = Router();

    const periodService = new PeriodService()
    const periodController = new PeriodController( periodService )

    router.get('/', periodController.getAllPeriods )

    return router;
  }

}