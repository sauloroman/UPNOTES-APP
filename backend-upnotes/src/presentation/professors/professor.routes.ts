import { Router } from "express";
import { ProfessorController } from "./professors.controllers";
import { ProfessorService } from "./professors.services";

export class ProfessorRoutes {

  public static get routes(): Router {

    const router = Router();

    const professorService = new ProfessorService()
    const professorController = new ProfessorController( professorService )    

    router.get('/', professorController.getProfessors )
    router.post('/', professorController.createProfessor )

    return router

  }

}