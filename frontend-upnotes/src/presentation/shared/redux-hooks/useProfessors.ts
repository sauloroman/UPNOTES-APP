import { useDispatch, useSelector } from "react-redux"
import { CreateProfessor } from "../../../domain/entities/professor"
import { createProfessorInModalThunk, getProfessorsByUserModalThunk, getProfessorsByUserPageThunk } from "../../../infrastructure/store/thunks/professor"
import { RootState } from "../../../infrastructure/store/store"
import { setProfessorIdToEditInModal } from "../../../infrastructure/store/slices/user.slice"

export const useProfessors = () => {

  const dispatch = useDispatch<any>()

  const { professors: {professors, professorIdToEditInModal} } = useSelector( (state: RootState) => state.user )

  const createProfessor = ( createProfessor: CreateProfessor ) => {
    dispatch( createProfessorInModalThunk(createProfessor) )
  }

  const getProfessorsByUserModal = () => {
    dispatch( getProfessorsByUserModalThunk() )
  }

  const getProfessorsByUserPage = ( page: number ) => {
    dispatch( getProfessorsByUserPageThunk( page ) )
  }

  const selectProfessorToEdit = ( professorId: string ) => {
    dispatch( setProfessorIdToEditInModal( professorId ) )
  }

  return {
    professors, 
    professorIdToEditInModal,

    createProfessor,
    getProfessorsByUserModal,
    getProfessorsByUserPage,
    selectProfessorToEdit
  }

}