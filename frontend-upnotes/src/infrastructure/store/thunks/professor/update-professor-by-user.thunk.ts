import { Alert, AlertType } from "../../../../application";
import { GetProfessorsByUserUseCase, UpdateProfessorUseCase } from "../../../../application";
import { UpdateProfessorOfUser } from "../../../../domain/entities";
import { axiosError } from "../../../errors/axios.error";
import { axiosProfessorsRepository } from "../../../repositories/axios-professors.repository";
import { setAlert } from "../../slices/alert.slice";
import { setIsLoading } from "../../slices/loading.slice";
import { setTotalOfPages } from "../../slices/pagination.slice";
import { setProfessors } from "../../slices/user.slice";
import { AppThunk } from "../../store";

export const updateProfessorByUserThunk = ( professorId: string, updateProfessorByUser: UpdateProfessorOfUser ): AppThunk => {
  return async ( dispatch ) => {

    let alert: Alert = {
      description: '',
      title: '',
      type: AlertType.success
    }

    dispatch( setIsLoading(true) )

    try {
      
      const { msg } = await new UpdateProfessorUseCase({ professorsRepository: axiosProfessorsRepository }).apply( professorId, updateProfessorByUser )

      const { professors, totalPages } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply({ page: 1, limit: 10 })

      dispatch( setProfessors(professors) )
      dispatch( setTotalOfPages({ name: 'professors', totalOfPages: totalPages }))

      alert.title = 'Profesor actualizado'
      alert.description = msg

    } catch (error) {
      console.log(error)
      const errorMessage = axiosError( error )

      alert.title = 'No se pudo actualizar el profesor'
      alert.description = errorMessage
      alert.type = AlertType.error
    }

    dispatch( setAlert({ alert, isAlertShown: true }) )
    dispatch( setIsLoading(false) )
  }
}