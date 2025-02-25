import { useDispatch, useSelector } from "react-redux"
<<<<<<< HEAD
import { CreateProfessor, DeleteProfessorByUser, UpdateProfessorOfUser } from "../../../domain/entities/professor"
=======
import { CreateProfessor, UpdateProfessorOfUser } from "../../../domain/entities/professor"
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
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
<<<<<<< HEAD
    dispatch( updateProfessorByUserThunk( professorId, updateProfessorByUser ) )
=======
    dispatch( updateProfessorByUserThunk(professorId, updateProfessorByUser ) )
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
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