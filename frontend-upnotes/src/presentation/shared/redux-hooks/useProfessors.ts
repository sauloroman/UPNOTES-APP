import { useDispatch } from "react-redux"
import { CreateProfessor } from "../../../domain/entities/professor"
import { CreateProfessorThunk } from "../../../infrastructure/store/thunks/professor/create-professor.thunk"

export const useProfessors = () => {

  const dispatch = useDispatch<any>()

  const createProfessor = ( createProfessor: CreateProfessor ) => {
    dispatch( CreateProfessorThunk(createProfessor) )
  }

  return {
    createProfessor
  }

}