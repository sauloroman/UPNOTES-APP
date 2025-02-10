export interface CreateProfessor {
  name: string;
  email?: string;
  phone?: string;
}

export interface DeleteProfessorByUser {
  id: string,
}

export interface Professor {
  id: string;
  name: string;
  email?: string;
  phone?: string;
}

export interface ProfessorResponse {
  professor: Professor
}

export interface ProfessorsResponse {
  page: number,
  totalPages: number,
  professorsInThisPage: number,
  professors: Professor[]
}

export interface GetProfessorsByUser {
  page?: number,
  limit?: number
}

export interface UpdateProfessorOfUser {
  name?: string,
  email?: string,
  phone?: string,
}