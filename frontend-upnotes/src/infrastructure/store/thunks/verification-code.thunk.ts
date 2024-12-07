import { AppThunk } from "../store";
import { VerificationCodeEmail } from '../../../domain/entities/verification-code';
import { setIsLoading } from "../slices/loading.slice";
import { GenerateNewVerificationCodeUseCase } from '../../../application/use-cases/verification-code/generate-new-verification-code';
import { AxiosVerificationCodeRepository } from "../../repositories/axios-verification-code.repository";
import { AlertType } from "../../../application";
import { axiosError } from "../../errors/axios.error";
import { setAlert } from "../slices/alert.slice";
import { setGenerateVerificationCode } from "../slices/auth.slice";

const axiosVerificationCodeRepository = new AxiosVerificationCodeRepository()

export const generateNewVerificationCodeThunk = ( verificationCodeEmail: VerificationCodeEmail, token: string ): AppThunk => {
  return async ( dispatch ) => {
    
    const alert = {
      title: '',
      description: '',
      type: AlertType.success,
    };

    dispatch( setIsLoading(true) )

    try {
      const useCase = new GenerateNewVerificationCodeUseCase({ verificationCodeRepository: axiosVerificationCodeRepository })
      const message = await useCase.create( verificationCodeEmail, token)
      alert.title = 'Código de verificación enviado'
      alert.description = message
    } catch (error) {
      console.log(error);
      const errorMessage = axiosError(error);
      alert.title = 'Error al crear código';
      alert.description = errorMessage;
      alert.type = AlertType.error;
    }

    dispatch( setIsLoading(false) )
    dispatch( setAlert({ alert, isAlertShown: true}))
    dispatch( setGenerateVerificationCode(false) )

  }
}