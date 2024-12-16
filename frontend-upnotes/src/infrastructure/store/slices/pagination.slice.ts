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

    setCurrentPage( state, { payload }: PayloadAction<number>) {
      state.currentPage = payload
    },

    setTotalOfPages( state, { payload }: PayloadAction<number> ) {
      state.totalOfPages = payload
    },

    nextPage( state, { payload }: PayloadAction<number> ) {
      state.currentPage += payload;
    },

    prevPage( state, { payload }: PayloadAction<number> ) {
      state.currentPage -= payload
    },

  }
})

export const {
  setCurrentPage,
  setTotalOfPages,
  nextPage,
  prevPage,
} = paginationSlice.actions