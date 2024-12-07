import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { uiSlice } from "./slices/ui.slice";
import { alertSlice } from "./slices/alert.slice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    alert: alertSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>