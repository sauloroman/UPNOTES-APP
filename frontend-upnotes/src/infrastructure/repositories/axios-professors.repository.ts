import { CreateProfessor, GetProfessorsByUser, ProfessorResponse, ProfessorsResponse } from "../../domain/entities/professor";
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

}

export const axiosProfessorsRepository = new AxiosProfessorsRepository()