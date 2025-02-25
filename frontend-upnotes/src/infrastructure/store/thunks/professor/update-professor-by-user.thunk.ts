import { Alert, AlertType } from "../../../../application";
import { GetProfessorsByUserUseCase } from "../../../../application/use-cases/professors/get-professors-by-user";
import { UpdateProfessorByUserUseCase } from "../../../../application/use-cases/professors/update-professor";
import { UpdateProfessorOfUser } from "../../../../domain/entities";
import { axiosError } from "../../../errors/axios.error";
import { axiosProfessorsRepository } from "../../../repositories/axios-professors.repository";
import { setAlert } from "../../slices/alert.slice";
import { setIsLoading } from "../../slices/loading.slice";
import { setProfessors } from "../../slices/user.slice";
import { AppThunk } from "../../store";

export const updateProfessorByUserThunk = ( professorId: string, updateProfessorByUser: UpdateProfessorOfUser ): AppThunk => {
  return async ( dispatch ) => {

    const alert: Alert = {
      description: '',
      title: '',
      type: AlertType.success
    }

    dispatch( setIsLoading(true) )

    try {
      
      const { msg } = await new UpdateProfessorByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply(professorId, updateProfessorByUser)

      const { professors } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply({});

      dispatch( setProfessors( professors ) )

      alert.title = "Profesor Actualizado"
      alert.description = msg

    } catch (error) {
      console.log(error)
      const errorMessage = axiosError(error);

      alert.title = 'No se actualizo el profesor';
      alert.description = errorMessage;
      alert.type = AlertType.error;
    }
    
    dispatch( setAlert({ alert, isAlertShown: true }))
    dispatch( setIsLoading(false) )
  }
}