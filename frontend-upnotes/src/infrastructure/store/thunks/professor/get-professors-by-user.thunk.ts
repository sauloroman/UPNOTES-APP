import { Alert, AlertType } from "../../../../application";
import { GetProfessorsByUserUseCase } from "../../../../application/use-cases/professors/get-professors-by-user";
import { axiosError } from "../../../errors/axios.error";
import { axiosProfessorsRepository } from "../../../repositories/axios-professors.repository";
import { setAlert } from "../../slices/alert.slice";
import { setIsLoading } from "../../slices/loading.slice";
import { setTotalOfPages } from "../../slices/pagination.slice";
import { setProfessors } from "../../slices/user.slice";
import { AppThunk } from "../../store";

export const getProfessorsByUserModalThunk = (): AppThunk => {
  return async ( dispatch ) => {
    try {

      const { professors } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply({})
      
      dispatch( setProfessors(professors) )

    } catch (error) {
      console.log(error)
    }
  }
}

export const getProfessorsByUserPageThunk = ( page: number ): AppThunk => {
  return async ( dispatch ) => {

    let alert: Alert = {
      title: '',
      description: '',
      type: AlertType.success
    }

    dispatch( setIsLoading( true ) )

    try {

      const { professors, totalPages } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply({ page, limit: 10 })

      dispatch( setProfessors( professors ) )
      dispatch( setTotalOfPages({ name: 'professors', totalOfPages: totalPages }))

    } catch (error) {
      console.log(error)
      const errorMessage = axiosError(error);
      alert.title = 'No se pudieron obtener los profesores';
      alert.description = errorMessage;
      alert.type = AlertType.error;
      dispatch( setAlert({ alert, isAlertShown: true }))
    }

    dispatch( setIsLoading( false ) )

  }
}