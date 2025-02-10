import { useDispatch, useSelector } from "react-redux"
import { CreateProfessor, UpdateProfessorOfUser } from "../../../domain/entities/professor"
import { 
  createProfessorInModalThunk, 
  getProfessorsByUserModalThunk, 
  getProfessorsByUserPageThunk, 
  deleteProfessorThunk, 
  updateProfessorByUserThunk
} from "../../../infrastructure/store/thunks/professor"
import { RootState } from "../../../infrastructure/store/store"
import { setProfessorIdToDelete, setProfessorIdToEditInModal } from "../../../infrastructure/store/slices/user.slice"

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

  const deleteProfessorOfUser = ( professorId: string ) => {
    dispatch( deleteProfessorThunk( professorId ) )
  }

  const updateProfessorOfUser = ( professorId: string, updateProfessorByUser: UpdateProfessorOfUser ) => {
    dispatch( updateProfessorByUserThunk(professorId, updateProfessorByUser ) )
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
    selectProfessorToDelete,
    updateProfessorOfUser
  }

}