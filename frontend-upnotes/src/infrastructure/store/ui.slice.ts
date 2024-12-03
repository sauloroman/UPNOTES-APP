import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMenuOverShown: boolean;
} 

const initialState: UIState = {
  isMenuOverShown: false,
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {

    setIsMenuOverShown( state, { payload }: PayloadAction<boolean> ) {
      state.isMenuOverShown = payload
    }

  }
})

export const { setIsMenuOverShown } = uiSlice.actions
