<<<<<<< HEAD
import { MessageResponse, UpdateProfessorOfUser } from "../../../domain/entities";
=======
import { UpdateProfessorOfUser } from "../../../domain/entities";
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
import { ProfessorsRepository } from "../../../domain/repositories/professors.repository";

interface Options {
  professorsRepository: ProfessorsRepository
}

<<<<<<< HEAD
export class UpdateProfessorByUserUseCase {

  private readonly professorRepository: ProfessorsRepository

  constructor({ professorsRepository }: Options) {
    this.professorRepository = professorsRepository
  }

  public async apply( professorId: string, updateProfessorOfUser: UpdateProfessorOfUser ): Promise<MessageResponse> {
    const resp = await this.professorRepository.updateProfessorOfUser( professorId, updateProfessorOfUser )
    return resp
=======
export class UpdateProfessorUseCase {

  private readonly professorsRepository: ProfessorsRepository

  constructor({ professorsRepository }: Options){
    this.professorsRepository = professorsRepository
  }

  public async apply( professorId: string, updateProfessorOfUser: UpdateProfessorOfUser ) {
    const res = await this.professorsRepository.updateProfessorOfUser(professorId, updateProfessorOfUser)
    return res
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
  }

}