import { AlertType } from "../../../../application";
import { RenewTokenUseCase } from "../../../../application/use-cases/auth/renew-token";
import { axiosAuthRepository } from "../../../repositories/axios-auth.respository";

import { setAlert } from "../../slices/alert.slice";
import { loginUserAuth } from "../../slices/auth.slice";
import { setIsLoading } from "../../slices/loading.slice";
import { AppThunk } from "../../store";

export const renewTokenThunk = (): AppThunk => {
  return async ( dispatch ) => {

    const alert = {
      title: '',
      description: '',
      type: AlertType.warn,
    };

    dispatch( setIsLoading(true) )

    try {

      const useCase = new RenewTokenUseCase({ authRepository: axiosAuthRepository })
      const { user, token } = await useCase.apply()

      dispatch( loginUserAuth( user ) )
      localStorage.setItem('user', JSON.stringify( token ) )

    } catch (error) {
      console.log(error);
      alert.title = 'Inicia Sesión';
      alert.description = 'Comienza iniciando sesión';
      dispatch( setAlert({ alert, isAlertShown: true }))
    }

    dispatch( setIsLoading(false) )

  }
}