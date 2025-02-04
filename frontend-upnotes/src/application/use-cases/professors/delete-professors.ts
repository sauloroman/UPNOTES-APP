import { DeleteProfessorByUser, MessageResponse } from "../../../domain/entities";
import { ProfessorsRepository } from "../../../domain/repositories/professors.repository";

interface Options {
  professorsRepository: ProfessorsRepository
}

export class DeleteProfessorsUseCase {

  private readonly professorsRepository: ProfessorsRepository

  constructor({ professorsRepository }: Options) {
    this.professorsRepository = professorsRepository
  }

  public async apply( deleteProfessorByUser: DeleteProfessorByUser ): Promise<MessageResponse> {
    const msg = await this.professorsRepository.deleteProfessorOfUser( deleteProfessorByUser )
    return msg
  }

}