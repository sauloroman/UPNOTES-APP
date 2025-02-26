import { MessageResponse } from "../../domain/entities";
import { CreateProfessor, DeleteProfessorByUser, GetProfessorsByUser, ProfessorResponse, ProfessorsResponse, UpdateProfessorOfUser } from "../../domain/entities/professor";
import { ProfessorsRepository } from "../../domain/repositories/professors.repository";
import { axiosInstanceProtected } from "../http/axiosInstance";

export class AxiosProfessorsRepository implements ProfessorsRepository {

  async createProfessor(createProfessor: CreateProfessor): Promise<ProfessorResponse> {
    const { data } = await axiosInstanceProtected.post<ProfessorResponse>('/professors', createProfessor )
    return data
  }

  async getProfessorsOfUser( {limit = 10000, page = 1}: GetProfessorsByUser ): Promise<ProfessorsResponse> {
    const { data } = await axiosInstanceProtected.get<ProfessorsResponse>(`/professors?page=${page}&limit=${limit}`)
    return data
  }

  async deleteProfessorOfUser( professorId: string ): Promise<MessageResponse> {
    const { data } = await axiosInstanceProtected.delete<MessageResponse>(`/professors/${professorId}`)
    return data
  } 

  async updateProfessorOfUser(professorId: string, updateProfessorByUser: UpdateProfessorOfUser): Promise<MessageResponse> {
    const { data } = await axiosInstanceProtected.put(`/professors/${professorId}`, updateProfessorByUser )
    return data
  }

}

export const axiosProfessorsRepository = new AxiosProfessorsRepository()