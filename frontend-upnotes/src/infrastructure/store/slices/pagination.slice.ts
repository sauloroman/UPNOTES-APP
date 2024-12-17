import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pagination {
  currentPage: number,
  totalOfPages: number
}

interface InitialState {
  courses: Pagination
}

const initialState: InitialState = {
  'courses': {
    currentPage: 1,
    totalOfPages: 1,
  }
}

export const paginationSlice = createSlice({
  initialState: initialState,
  name: 'pagination',
  reducers: {

    setCurrentPage( state: any, { payload }: PayloadAction<{ name: string, currentPage: number}>) {
      state[payload.name].currentPage = payload.currentPage
    },

    setTotalOfPages( state: any, { payload }: PayloadAction<{ name: string, totalOfPages: number}> ) {
      state[payload.name].totalOfPages = payload.totalOfPages
    },

    nextPage( state: any, { payload }: PayloadAction<{ name: string, quantity: number}> ) {
      state[payload.name].currentPage += payload.quantity;
    },

    prevPage( state:any, { payload }: PayloadAction<{ name: string, quantity: number}> ) {
      state[payload.name].currentPage -= payload.quantity
    },

  }
})

export const {
  setCurrentPage,
  setTotalOfPages,
  nextPage,
  prevPage,
} = paginationSlice.actions