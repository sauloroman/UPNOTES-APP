import { CreateProfessor, ProfessorResponse } from "../../../domain/entities/professor";
import { ProfessorsRepository } from "../../../domain/repositories/professors.repository";

interface Options {
  professorsRepository: ProfessorsRepository
}

export class CreateProfessorUseCase {

  private readonly professorsRepository: ProfessorsRepository

  constructor({  professorsRepository }: Options){
    this.professorsRepository = professorsRepository
  }

  public async apply( createProfessor: CreateProfessor ): Promise<ProfessorResponse> {
    const professor = await this.professorsRepository.createProfessor( createProfessor )
    return professor 
  }

}