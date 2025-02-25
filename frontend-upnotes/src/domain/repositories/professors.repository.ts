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
<<<<<<< HEAD
  abstract deleteProfessorOfUser ( deleteProfessorByUser: DeleteProfessorByUser ): Promise<MessageResponse>
=======
  abstract deleteProfessorOfUser ( professorId: string ): Promise<MessageResponse>
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
  abstract updateProfessorOfUser( professorId: string, updateProfessorByUser: UpdateProfessorOfUser ): Promise<MessageResponse>

}