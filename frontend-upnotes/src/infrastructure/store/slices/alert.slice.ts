import { createSlice } from "@reduxjs/toolkit";
import { Alert, AlertType } from "../../../application";

interface InitialState {
  alert: Alert,
  isAlertShown: boolean,
}

const initialState: InitialState = {
  alert: {
    title: 'Alert Title',
    description: 'Alert Description',
    type: AlertType.success
  },
  isAlertShown: false,
}

export const alertSlice = createSlice({
  initialState: initialState,
  name: 'alert',
  reducers: {

  }
})

const {} = alertSlice.actions

