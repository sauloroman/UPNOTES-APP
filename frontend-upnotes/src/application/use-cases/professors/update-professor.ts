import { UpdateProfessorOfUser } from "../../../domain/entities";
import { ProfessorsRepository } from "../../../domain/repositories/professors.repository";

interface Options {
  professorsRepository: ProfessorsRepository
}

export class UpdateProfessorUseCase {

  private readonly professorsRepository: ProfessorsRepository

  constructor({ professorsRepository }: Options){
    this.professorsRepository = professorsRepository
  }

  public async apply( professorId: string, updateProfessorOfUser: UpdateProfessorOfUser ) {
    const res = await this.professorsRepository.updateProfessorOfUser(professorId, updateProfessorOfUser)
    return res
  }

}