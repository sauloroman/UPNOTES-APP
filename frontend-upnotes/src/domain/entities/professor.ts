export interface CreateProfessor {
  name: string;
  email?: string;
  phone?: string;
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
  professors: Professor[]
}