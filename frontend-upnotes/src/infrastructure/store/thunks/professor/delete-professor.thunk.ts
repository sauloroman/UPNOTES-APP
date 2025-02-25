import { Alert, AlertType } from "../../../../application"
import { DeleteProfessorsUseCase } from "../../../../application/use-cases/professors/delete-professors"
import { GetProfessorsByUserUseCase } from "../../../../application/use-cases/professors/get-professors-by-user"
import { DeleteProfessorByUser } from "../../../../domain/entities"
import { axiosError } from "../../../errors/axios.error"
import { axiosProfessorsRepository } from "../../../repositories/axios-professors.repository"
import { setAlert } from "../../slices/alert.slice"
import { setIsLoading } from "../../slices/loading.slice"
import { setTotalOfPages } from "../../slices/pagination.slice"
import { setProfessors } from "../../slices/user.slice"
import { AppThunk } from "../../store"

export const deleteProfessorThunk = ( professorId: string ): AppThunk => {
  return async ( dispatch ) => {

    const alert: Alert = {
      title: '',
      description: '',
      type: AlertType.success,
    }

    dispatch( setIsLoading( true ) )

    try {

      const useCase = new DeleteProfessorsUseCase({ professorsRepository: axiosProfessorsRepository })
      const { msg } = await useCase.apply( professorId )

      const { professors, totalPages } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply({ page: 1, limit: 10 })

      dispatch( setProfessors( professors ) )
      dispatch( setTotalOfPages({ name: 'professors', totalOfPages: totalPages }))

      alert.title = 'Profesor eliminado'
      alert.description = msg

    } catch (error) {
      console.log(error)
      const errorMessage = axiosError( error )

      alert.title = 'No se pudo eliminar el profesor';
      alert.description = errorMessage;
      alert.type = AlertType.error 
    }

    dispatch( setAlert({ alert, isAlertShown: true }))
    dispatch( setIsLoading( false ) )
      
  } 
}