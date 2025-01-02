import { GetProfessorsByUser, ProfessorsResponse } from '../../../domain/entities/professor';
import { ProfessorsRepository } from '../../../domain/repositories/professors.repository';

interface Options {
  professorsRepository: ProfessorsRepository
}

export class GetProfessorsByUserUseCase {

  private readonly professorsRepository: ProfessorsRepository

  constructor({ professorsRepository }: Options){
    this.professorsRepository = professorsRepository
  }

  public async apply( getProfessorByUser: GetProfessorsByUser ): Promise<ProfessorsResponse> {
    const professors = await this.professorsRepository.getProfessorsOfUser( getProfessorByUser )
    return professors
  }

}