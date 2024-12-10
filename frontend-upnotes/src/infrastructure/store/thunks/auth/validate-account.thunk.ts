import { ValidateAccount } from "../../../../domain/entities";

import { AlertType } from "../../../../application";
import { ValidateAccountUseCase } from "../../../../application/use-cases/auth/validate-account";

import { axiosAuthRepository } from "../../../repositories/axios-auth.respository";

import { setAlert } from "../../slices/alert.slice";
import { loginUserAuth, setGenerateVerificationCode } from "../../slices/auth.slice";
import { setIsLoading } from "../../slices/loading.slice";
import { AppThunk } from "../../store";

import { axiosError } from "../../../errors/axios.error";

export const validateAccountThunk = (validateAccount: ValidateAccount): AppThunk => {
  return async (dispatch) => {
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    dispatch(setIsLoading(true));

    try {
      const useCase = new ValidateAccountUseCase({ authRepository: axiosAuthRepository });
      const { msg, user, token } = await useCase.apply(validateAccount);

      dispatch(loginUserAuth(user));
      alert.title = 'Cuenta validada';
      alert.description = msg;
      localStorage.setItem('user', JSON.stringify(token));
      
    } catch (error) {
      console.log(error);
      const errorMessage = axiosError(error);

      if (errorMessage === 'El código de verificación ya ha expirado. Vuelva a generar uno') {
        alert.type = AlertType.warn
        dispatch( setGenerateVerificationCode(true) )
      } else {
        alert.type = AlertType.error
      }

      alert.title = 'Error en código de verificación';
      alert.description = errorMessage;
    }

    dispatch(setIsLoading(false));
    dispatch(setAlert({ alert, isAlertShown: true }));
  };
};

