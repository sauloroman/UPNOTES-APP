import { useDispatch, useSelector } from "react-redux"
import { CreateProfessor, DeleteProfessorByUser } from "../../../domain/entities/professor"
import { createProfessorInModalThunk, getProfessorsByUserModalThunk, getProfessorsByUserPageThunk } from "../../../infrastructure/store/thunks/professor"
import { RootState } from "../../../infrastructure/store/store"
import { setProfessorIdToDelete, setProfessorIdToEditInModal } from "../../../infrastructure/store/slices/user.slice"
import { deleteProfessorThunk } from "../../../infrastructure/store/thunks/professor/delete-professor.thunk"

export const useProfessors = () => {

  const dispatch = useDispatch<any>()

  const { professors: {professors, professorIdToEditInModal, professorIdToDelete } } = useSelector( (state: RootState) => state.user )

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

  const selectProfessorToDelete = ( professorId: string ) => {
    dispatch( setProfessorIdToDelete( professorId ) )
  }

  const deleteProfessorOfUser = ( deleteProfessorByUser: DeleteProfessorByUser ) => {
    dispatch( deleteProfessorThunk( deleteProfessorByUser ) )
  }

  return {
    professors, 
    professorIdToEditInModal,
    professorIdToDelete,

    createProfessor,
    getProfessorsByUserModal,
    getProfessorsByUserPage,
    selectProfessorToEdit,
    deleteProfessorOfUser,
    selectProfessorToDelete
  }

}