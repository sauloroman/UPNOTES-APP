import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMenuOverShown: boolean;
  isMenuAsideShown: boolean;
} 

const initialState: UIState = {
  isMenuOverShown: false,
  isMenuAsideShown: true,
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {

    setIsMenuOverShown( state, { payload }: PayloadAction<boolean> ) {
      state.isMenuOverShown = payload
    },

    setIsMenuAsideShown( state, {payload}: PayloadAction<boolean>) {
      state.isMenuAsideShown = payload;
    }

  }
})

export const { 
  setIsMenuOverShown,
  setIsMenuAsideShown,
} = menuSlice.actions
