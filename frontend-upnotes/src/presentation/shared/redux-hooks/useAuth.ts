import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../infrastructure/store/store';
import {
  ChangePassword,
  ForgotPassword,
  LoginAccount,
  NewVerificationCode,
  RegisterAccount,
  ValidateAccount,
} from '../../../domain/entities';
import {
  changePasswordThunk,
  forgotPasswordThunk,
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

  const forgotPassword = ( forgotPassword: ForgotPassword ) => {
    dispatch( forgotPasswordThunk(forgotPassword) )
  }

  const changePassword = ( changePassword: ChangePassword, token: string ) => {
    dispatch( changePasswordThunk( changePassword, token ) )
  }

  return {
    status,
    user,
    generateVerificationCode,

    generateNewVerificationCode,
    loginAccount,
    registerAccount,
    validateAccount,
    forgotPassword,
    changePassword
  };
};
