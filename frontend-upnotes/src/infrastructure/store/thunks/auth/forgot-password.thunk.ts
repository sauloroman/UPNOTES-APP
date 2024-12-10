import { ForgotPassword } from "../../../../domain/entities";

import { ForgotPasswordUseCase } from "../../../../application/use-cases/auth/forgot-password";
import { AlertType } from "../../../../application";

import { axiosAuthRepository } from "../../../repositories/axios-auth.respository";

import { setIsLoading } from "../../slices/loading.slice";
import { AppThunk } from "../../store";

import { axiosError } from "../../../errors/axios.error";
import { setAlert } from "../../slices/alert.slice";

export const forgotPasswordThunk = ( forgotPassword: ForgotPassword ): AppThunk => {
  return async ( dispatch ) => {
    
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    
    dispatch( setIsLoading( true ) )

    try {
      const useCase = new ForgotPasswordUseCase({ authRepository: axiosAuthRepository })
      const successMessage = await useCase.apply( forgotPassword )

      alert.title = 'Correo enviado'
      alert.description = successMessage

    } catch (error) {
      console.log(`${error}`)
      const errorMessage = axiosError( error )
      alert.title = 'No se pudo enviar el correo';
      alert.description = errorMessage;
      alert.type = AlertType.error
    }

    dispatch( setIsLoading( false ) )
    dispatch( setAlert({ alert, isAlertShown: true }))
  }
}