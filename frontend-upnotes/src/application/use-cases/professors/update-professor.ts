import { MessageResponse, UpdateProfessorOfUser } from "../../../domain/entities";
import { ProfessorsRepository } from "../../../domain/repositories/professors.repository";

interface Options {
  professorsRepository: ProfessorsRepository
}

export class UpdateProfessorByUserUseCase {

  private readonly professorRepository: ProfessorsRepository

  constructor({ professorsRepository }: Options) {
    this.professorRepository = professorsRepository
  }

  public async apply( professorId: string, updateProfessorOfUser: UpdateProfessorOfUser ): Promise<MessageResponse> {
    const resp = await this.professorRepository.updateProfessorOfUser( professorId, updateProfessorOfUser )
    return resp
  }

}