import { RegisterAccount } from '../../../../domain/entities/account';

import { AlertType } from '../../../../application';
import { RegisterAccountUseCase } from '../../../../application/use-cases/auth/register-account';

import { axiosAuthRepository } from '../../../repositories/axios-auth.respository';

import { setAlert } from '../../slices/alert.slice';
import { setIsLoading } from '../../slices/loading.slice';
import { AppThunk } from '../../store';

import { axiosError } from '../../../errors/axios.error';

export const registerAccountThunk = (registerAccount: RegisterAccount): AppThunk => {
  return async (dispatch) => {
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    dispatch(setIsLoading(true));

    try {
      
      const useCase = new RegisterAccountUseCase({
        authRepository: axiosAuthRepository,
      });
      const successMessage = await useCase.apply( registerAccount );

      alert.title = 'Valida tu cuenta';
      alert.description = successMessage;
      
    } catch (error) {

      console.log(error);
      const errorMessage = axiosError(error);
      alert.title = 'Error al registrar';
      alert.description = errorMessage;
      alert.type = AlertType.error;
      
    }

    dispatch(setAlert({ alert, isAlertShown: true }));
    dispatch(setIsLoading(false));
  };
};