import { NewVerificationCode } from "../../../../domain/entities";
import { AlertType } from "../../../../application";
import { GetNewVerificationCodeAccount } from "../../../../application/use-cases/auth/get-new-verification-code-account";

import { axiosAuthRepository } from "../../../repositories/axios-auth.respository";

import { setAlert } from "../../slices/alert.slice";
import { setGenerateVerificationCode } from "../../slices/auth.slice";
import { setIsLoading } from "../../slices/loading.slice";
import { AppThunk } from "../../store";

import { axiosError } from "../../../errors/axios.error";

export const newVerificationCodeThunk = ( newVerificationCode: NewVerificationCode, token: string ): AppThunk => {
  return async ( dispatch ) => {
    
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    dispatch( setIsLoading( true ) )

    try {
      
      const useCase = new GetNewVerificationCodeAccount({ authRepository: axiosAuthRepository })
      const msg = await useCase.apply( newVerificationCode, token )

      alert.title = 'Nuevo código generado';
      alert.description = msg;
      dispatch( setGenerateVerificationCode( false ) )
      
    } catch (error) {
      console.log(error);
      const errorMessage = axiosError(error);
      alert.title = 'Error al generar código nuevo';
      alert.description = errorMessage;
      alert.type = AlertType.error;
    }

    dispatch( setIsLoading( false ) )
    dispatch( setAlert({ alert, isAlertShown: true}))
  }
}