import { MessageResponse } from "../entities";
import { 
  CreateProfessor, 
  GetProfessorsByUser, 
  ProfessorResponse, 
  ProfessorsResponse, 
  UpdateProfessorOfUser
} from "../entities/professor";

export abstract class ProfessorsRepository {

  abstract createProfessor( createProfessor: CreateProfessor ): Promise<ProfessorResponse>
  abstract getProfessorsOfUser( getProfessorsByUser: GetProfessorsByUser ): Promise<ProfessorsResponse>
  abstract deleteProfessorOfUser ( professorId: string ): Promise<MessageResponse>
  abstract updateProfessorOfUser( professorId: string, updateProfessorByUser: UpdateProfessorOfUser ): Promise<MessageResponse>

}