import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currentPage: number;
  totalOfPages: number;
}

const initialState: InitialState = {
  currentPage: 1,
  totalOfPages: 1,
}

export const paginationSlice = createSlice({
  initialState: initialState,
  name: 'pagination',
  reducers: {

    setTotalOfPages( state, { payload }: PayloadAction<number> ) {
      state.totalOfPages = payload
    },

    nextPage( state, { payload }: PayloadAction<number> ) {
      state.currentPage += payload;
    },

    prevPage( state, { payload }: PayloadAction<number> ) {
      if ( state.currentPage > 1 ) {
        state.currentPage -= payload
      }
    },

  }
})

export const {
  setTotalOfPages,
  nextPage,
  prevPage,
} = paginationSlice.actions