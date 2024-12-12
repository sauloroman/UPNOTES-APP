import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currentPage: number;
}

const initialState: InitialState = {
  currentPage: 1,
}

export const paginationSlice = createSlice({
  initialState: initialState,
  name: 'pagination',
  reducers: {

    nextPage( state, { payload }: PayloadAction<number> ) {
      state.currentPage += payload;
    },

    prevPage( state, { payload }: PayloadAction<number> ) {
      if ( state.currentPage > 1 ) {
        state.currentPage -= payload
      }
    }

  }
})

export const {
  nextPage,
  prevPage,
} = paginationSlice.actions