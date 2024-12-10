import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../infrastructure/store/store';
import {
  LoginAccount,
  NewVerificationCode,
  RegisterAccount,
  ValidateAccount,
} from '../../../domain/entities';
import {
  loginAccountThunk,
  newVerificationCodeThunk,
  registerAccountThunk,
  validateAccountThunk,
} from '../../../infrastructure/store/thunks/auth';

export const useAuth = () => {
  const dispatch = useDispatch<any>();
  const { status, user, generateVerificationCode } = useSelector(
    (state: RootState) => state.auth
  );

  const generateNewVerificationCode = (
    newVerificationCode: NewVerificationCode,
    token: string
  ) => {
    dispatch(newVerificationCodeThunk(newVerificationCode, token));
  };

  const loginAccount = (loginAccount: LoginAccount) => {
    dispatch(loginAccountThunk(loginAccount));
  };

  const registerAccount = (registerAccount: RegisterAccount) => {
    dispatch(registerAccountThunk(registerAccount));
  };

  const validateAccount = (validateAccount: ValidateAccount) => {
    dispatch(validateAccountThunk(validateAccount));
  };

  return {
    status,
    user,
    generateVerificationCode,

    generateNewVerificationCode,
    loginAccount,
    registerAccount,
    validateAccount,
  };
};
