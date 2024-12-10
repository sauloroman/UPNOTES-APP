import { LoginAccount } from "../../../../domain/entities";

import { AlertType } from "../../../../application";
import { LoginAccountUseCase } from "../../../../application/use-cases/auth/login-account";

import { axiosAuthRepository } from "../../../repositories/axios-auth.respository";

import { setAlert } from "../../slices/alert.slice";
import { loginUserAuth } from "../../slices/auth.slice";
import { setIsLoading } from "../../slices/loading.slice";
import { AppThunk } from "../../store";

import { axiosError } from "../../../errors/axios.error";

export const loginAccountThunk = ( loginAccount: LoginAccount ): AppThunk => {
  return async ( dispatch ) => {

    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    dispatch( setIsLoading( true ) )
    
    try {
      
      const useCase = new LoginAccountUseCase({ authRepository: axiosAuthRepository })
      const { msg, token, user } = await useCase.apply( loginAccount )

      dispatch( loginUserAuth( user ) )
      localStorage.setItem('user', JSON.stringify(token));
      alert.title = 'Inicio de sesión';
      alert.description = msg;

    } catch (error) {
      console.log(`${error}`)
      const errorMessage = axiosError( error )
      alert.title = 'No se pudo iniciar sesión';
      alert.description = errorMessage;
      alert.type = AlertType.error
    }
    
    dispatch( setIsLoading( false ) )
    dispatch( setAlert({ alert, isAlertShown: true }))
  }
}
