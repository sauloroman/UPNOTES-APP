import { AlertType } from '../../../../application';
import { CreateProfessorUseCase } from '../../../../application/use-cases/professors/create-professor';
import { GetProfessorsByUserUseCase } from '../../../../application/use-cases/professors/get-professors-by-user';
import { CreateProfessor } from '../../../../domain/entities/professor';
import { axiosError } from '../../../errors/axios.error';
import { axiosProfessorsRepository } from '../../../repositories/axios-professors.repository';
import { setAlert } from '../../slices/alert.slice';
import { setIsLoading } from '../../slices/loading.slice';
import { setProfessors } from '../../slices/user.slice';
import { AppThunk } from '../../store';

export const createProfessorInModalThunk = (
  createProfessor: CreateProfessor
): AppThunk => {
  return async (dispatch) => {
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    dispatch(setIsLoading(true));

    try {
      const useCase = new CreateProfessorUseCase({
        professorsRepository: axiosProfessorsRepository,
      });
      const { professor } = await useCase.apply(createProfessor);

      const { professors } = await new GetProfessorsByUserUseCase({
        professorsRepository: axiosProfessorsRepository,
      }).apply({});

      dispatch(setProfessors(professors));

      alert.title = 'Profesor Creado';
      alert.description = `Profesor ${professor.name} ha sido creado existosamente`;
    } catch (error) {
      console.log(error);
      const errorMessage = axiosError( error )
      alert.title = 'No se pudo crear el profesor';
      alert.description = errorMessage;
      alert.type = AlertType.error  
    }

    dispatch(setIsLoading(false));
    dispatch( setAlert({ alert, isAlertShown: true }))
  };
};
