import { useDispatch } from "react-redux"
import { RegisterUser, ValidateUser } from "../../../domain/entities";
import { registerUserThunk, validateUserThunk } from "../../../infrastructure/store/thunks/user.thunk";

export const useUser = () => {

  const dispatch = useDispatch<any>();

  const registerUser = ( user: RegisterUser ) => {
    dispatch(registerUserThunk( user ))
  }

  const validateUser = ( validateUser: ValidateUser ) => {
    dispatch(validateUserThunk( validateUser ))
  }

  return {
    registerUser,
    validateUser
  }
}