import { AlertType, RegisterUserUseCase } from "../../../application"
import { ValidateUserUseCase } from "../../../application/use-cases/user/validate-user"
import { RegisterUser, ValidateUser } from "../../../domain/entities"
import { axiosError } from "../../errors/axios.error"
import { AxiosUserRepository } from "../../repositories/axios-user.repository"
import { setAlert } from "../slices/alert.slice"
import { setIsLoading } from "../slices/loading.slice"
import { AppThunk } from "../store"

const axiosUserRepository = new AxiosUserRepository() 

export const registerUserThunk = ( user: RegisterUser ): AppThunk => {
  return async( dispatch ) => {
    
    const alert = {
      title: '',
      description: '',
      type: AlertType.success
    }

    dispatch( setIsLoading(true) )
    
    try {
      const useCase = new RegisterUserUseCase({ userRepository: axiosUserRepository})
      const successMessage = await useCase.create(user)
      alert.title = 'Valida tu cuenta'
      alert.description = successMessage
    } catch (error) {
      const errorMessage = axiosError(error)
      alert.title = 'Error al registrar'
      alert.description = errorMessage
      alert.type = AlertType.error 
    }
    
    dispatch(setAlert({ alert, isAlertShown: true }))
    dispatch( setIsLoading(false) )

  }
}

export const validateUserThunk = ( validateUser: ValidateUser ): AppThunk => {
  return async( dispatch ) => {

    dispatch( setIsLoading( true ) )
    
    try {
      const useCase = new ValidateUserUseCase({ userRepository: axiosUserRepository })
      const { msg, user } = await useCase.create( validateUser )
      console.log({ msg, user })
    } catch (error) {
      console.log(error)
    }

    dispatch( setIsLoading( false ) )

  }
}