import { useDispatch } from "react-redux"
import { LoginUser, RegisterUser, ValidateUser } from "../../../domain/entities";
import { loginUserThunk, registerUserThunk, validateUserThunk } from "../../../infrastructure/store/thunks/user.thunk";

export const useUser = () => {

  const dispatch = useDispatch<any>();

  const loginUser = ( loginUser: LoginUser ) => {
    dispatch( loginUserThunk( loginUser ) )
  }

  const registerUser = ( user: RegisterUser ) => {
    dispatch(registerUserThunk( user ))
  }

  const validateUser = ( validateUser: ValidateUser ) => {
    dispatch(validateUserThunk( validateUser ))
  }

  return {
    registerUser,
    validateUser,
    loginUser
  }
}