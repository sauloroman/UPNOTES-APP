import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { menuSlice } from "./slices/menu.slice";
import { alertSlice } from "./slices/alert.slice";
import { loadingSlice } from "./slices/loading.slice";
import { authSlice } from "./slices/auth.slice";
import { paginationSlice } from "./slices/pagination.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer,
    menu: menuSlice.reducer,
    alert: alertSlice.reducer,
    pagination: paginationSlice.reducer
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