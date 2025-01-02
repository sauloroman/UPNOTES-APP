import { CreateProfessor, GetProfessorsByUser, ProfessorResponse, ProfessorsResponse } from "../entities/professor";

export abstract class ProfessorsRepository {

  abstract createProfessor( createProfessor: CreateProfessor ): Promise<ProfessorResponse>
  abstract getProfessorsOfUser( getProfessorsByUser: GetProfessorsByUser ): Promise<ProfessorsResponse>

}