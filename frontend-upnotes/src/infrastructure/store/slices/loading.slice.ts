import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isLoading: boolean
}

const initialState: InitialState = {
  isLoading: false
}

export const loadingSlice = createSlice({
  initialState: initialState,
  name: 'loading',
  reducers: {

    setIsLoading( state, { payload }: PayloadAction<boolean> ) {
      state.isLoading = payload
    },

  }
})

export const { setIsLoading } = loadingSlice.actions

