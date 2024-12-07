import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store"
import { generateNewVerificationCodeThunk } from "../../../infrastructure/store/thunks/verification-code.thunk";
import { VerificationCodeEmail } from '../../../domain/entities/verification-code';

export const useAuth = () => {

  const dispatch = useDispatch<any>();
  const { status, user, generateVerificationCode } = useSelector( (state: RootState) => state.auth )

  const generateNewVerificationCode = ( verificationCodeEmail: VerificationCodeEmail, token: string ) => {
    dispatch( generateNewVerificationCodeThunk( verificationCodeEmail, token ) )
  }

  return {
    status,
    user, 
    generateVerificationCode,

    generateNewVerificationCode,
  }

}