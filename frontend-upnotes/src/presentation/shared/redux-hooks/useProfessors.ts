import { useDispatch, useSelector } from "react-redux"
import { CreateProfessor } from "../../../domain/entities/professor"
import { createProfessorThunk, getProfessorByUserThunk } from "../../../infrastructure/store/thunks/professor"
import { RootState } from "../../../infrastructure/store/store"

export const useProfessors = () => {

  const dispatch = useDispatch<any>()

  const { professors: {professors} } = useSelector( (state: RootState) => state.user )

  const createProfessor = ( createProfessor: CreateProfessor ) => {
    dispatch( createProfessorThunk(createProfessor) )
  }

  const getProfessorsByUser = () => {
    dispatch( getProfessorByUserThunk() )
  }

  return {
    professors, 

    createProfessor,
    getProfessorsByUser
  }

}