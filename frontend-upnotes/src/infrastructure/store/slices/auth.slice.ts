import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "../../../domain/entities";

export enum AuthStatus {
  authenticated = 'authenticated',
  unauthenticated = 'unauthenticated '
}

interface InitialState {
  user: Account | null,
  status: AuthStatus,
  generateVerificationCode: boolean
}

const initialState: InitialState = {
  user: null,
  status: AuthStatus.unauthenticated,
  generateVerificationCode: false,
}

export const authSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {

    loginUserAuth( state, { payload }: PayloadAction<Account>) {
      state.user = payload
      state.status = AuthStatus.authenticated
      state.generateVerificationCode = initialState.generateVerificationCode
    },
    
    logoutUserAuth( state ) {
      state.user = null
      state.status = AuthStatus.unauthenticated
      state.generateVerificationCode = initialState.generateVerificationCode
    },

    setGenerateVerificationCode( state, {payload}: PayloadAction<boolean> ) {
      state.generateVerificationCode = payload
    }

  }
})

export const {
  loginUserAuth,
  logoutUserAuth,
  setGenerateVerificationCode,
} = authSlice.actions