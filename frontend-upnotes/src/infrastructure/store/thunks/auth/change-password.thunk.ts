import { ChangePassword } from "../../../../domain/entities";

import { AlertType, ChangePasswordUseCase } from "../../../../application";

import { axiosAuthRepository } from "../../../repositories/axios-auth.respository";

import { setIsLoading } from "../../slices/loading.slice";
import { AppThunk } from "../../store";

import { axiosError } from "../../../errors/axios.error";
import { setAlert } from "../../slices/alert.slice";

export const changePasswordThunk = ( changePassword: ChangePassword, token: string ): AppThunk => {
  return async ( dispatch ) => {
    
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    
    dispatch( setIsLoading( true ) )

    try {
      const useCase = new ChangePasswordUseCase({ authRepository: axiosAuthRepository })
      const successMessage = await useCase.apply( changePassword, token )

      alert.title = 'Actualización de Contraseña'
      alert.description = successMessage

    } catch (error) {
      console.log(`${error}`)
      const errorMessage = axiosError( error )
      alert.title = 'No se pudo actualizar la contraseña';
      alert.description = errorMessage;
      alert.type = AlertType.error
    }

    dispatch( setIsLoading( false ) )
    dispatch( setAlert({ alert, isAlertShown: true }))
  }
}