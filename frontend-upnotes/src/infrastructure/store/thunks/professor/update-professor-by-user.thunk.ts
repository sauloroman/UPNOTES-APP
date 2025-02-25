import { Alert, AlertType } from "../../../../application";
<<<<<<< HEAD
import { GetProfessorsByUserUseCase } from "../../../../application/use-cases/professors/get-professors-by-user";
import { UpdateProfessorByUserUseCase } from "../../../../application/use-cases/professors/update-professor";
=======
import { GetProfessorsByUserUseCase, UpdateProfessorUseCase } from "../../../../application";
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
import { UpdateProfessorOfUser } from "../../../../domain/entities";
import { axiosError } from "../../../errors/axios.error";
import { axiosProfessorsRepository } from "../../../repositories/axios-professors.repository";
import { setAlert } from "../../slices/alert.slice";
import { setIsLoading } from "../../slices/loading.slice";
<<<<<<< HEAD
=======
import { setTotalOfPages } from "../../slices/pagination.slice";
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
import { setProfessors } from "../../slices/user.slice";
import { AppThunk } from "../../store";

export const updateProfessorByUserThunk = ( professorId: string, updateProfessorByUser: UpdateProfessorOfUser ): AppThunk => {
  return async ( dispatch ) => {

<<<<<<< HEAD
    const alert: Alert = {
=======
    let alert: Alert = {
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
      description: '',
      title: '',
      type: AlertType.success
    }

    dispatch( setIsLoading(true) )

    try {
      
<<<<<<< HEAD
      const { msg } = await new UpdateProfessorByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply(professorId, updateProfessorByUser)

      const { professors } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply({});

      dispatch( setProfessors( professors ) )

      alert.title = "Profesor Actualizado"
=======
      const { msg } = await new UpdateProfessorUseCase({ professorsRepository: axiosProfessorsRepository }).apply( professorId, updateProfessorByUser )

      const { professors, totalPages } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply({ page: 1, limit: 10 })

      dispatch( setProfessors(professors) )
      dispatch( setTotalOfPages({ name: 'professors', totalOfPages: totalPages }))

      alert.title = 'Profesor actualizado'
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
      alert.description = msg

    } catch (error) {
      console.log(error)
<<<<<<< HEAD
      const errorMessage = axiosError(error);

      alert.title = 'No se actualizo el profesor';
      alert.description = errorMessage;
      alert.type = AlertType.error;
    }
    
    dispatch( setAlert({ alert, isAlertShown: true }))
=======
      const errorMessage = axiosError( error )

      alert.title = 'No se pudo actualizar el profesor'
      alert.description = errorMessage
      alert.type = AlertType.error
    }

    dispatch( setAlert({ alert, isAlertShown: true }) )
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
    dispatch( setIsLoading(false) )
  }
}