import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert, AlertType } from "../../../application";

interface InitialState {
  alert: Alert,
  isAlertShown: boolean,
}

const initialState: InitialState = {
  alert: {
    title: '',
    description: '',
    type: AlertType.success
  },
  isAlertShown: false,
}

export const alertSlice = createSlice({
  initialState: initialState,
  name: 'alert',
  reducers: {

    setAlert( state, { payload }: PayloadAction<InitialState> ) {
      state.alert = payload.alert
      state.isAlertShown = payload.isAlertShown
    },

    clearAlert( state ) {
      state.alert = {
        title: '',
        description: '',
        type: AlertType.success
      }
      state.isAlertShown = false
    }

  }
})

export const { setAlert, clearAlert } = alertSlice.actions

