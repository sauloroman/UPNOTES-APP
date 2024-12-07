import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../domain/entities";

export enum AuthStatus {
  authenticated = 'authenticated',
  unauthenticated = 'unauthenticated '
}

interface InitialState {
  user: User | null,
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

    loginUser( state, { payload }: PayloadAction<User>) {
      state.user = payload
      state.status = AuthStatus.authenticated
    },

    logoutUser( state ) {
      state.user = null
      state.status = AuthStatus.unauthenticated
    },

    setGenerateVerificationCode( state, {payload}: PayloadAction<boolean> ) {
      state.generateVerificationCode = payload
    }

  }
})

export const {
  loginUser,
  logoutUser,
  setGenerateVerificationCode,
} = authSlice.actions