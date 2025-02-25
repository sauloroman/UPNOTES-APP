import { MessageResponse } from "../entities";
import { 
  CreateProfessor, 
  DeleteProfessorByUser, 
  GetProfessorsByUser, 
  ProfessorResponse, 
  ProfessorsResponse, 
  UpdateProfessorOfUser
} from "../entities/professor";

export abstract class ProfessorsRepository {

  abstract createProfessor( createProfessor: CreateProfessor ): Promise<ProfessorResponse>
  abstract getProfessorsOfUser( getProfessorsByUser: GetProfessorsByUser ): Promise<ProfessorsResponse>
  abstract deleteProfessorOfUser ( deleteProfessorByUser: DeleteProfessorByUser ): Promise<MessageResponse>
  abstract updateProfessorOfUser( professorId: string, updateProfessorByUser: UpdateProfessorOfUser ): Promise<MessageResponse>

}