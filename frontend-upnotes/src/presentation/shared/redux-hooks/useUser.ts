import { useDispatch } from "react-redux"
import { RegisterUser } from "../../../domain/entities";
import { registerUserThunk } from "../../../infrastructure/store/thunks/user.thunk";

export const useUser = () => {

  const dispatch = useDispatch<any>();

  const registerUser = ( user: RegisterUser ) => {
    dispatch(registerUserThunk( user ))
  }

  return {
    registerUser
  }
}