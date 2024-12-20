import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalNames {
  createCourse,
  professors,
  editCourse,
}

interface InitialState {
  isOpen: boolean,
  name: ModalNames | string
}

const initialState: InitialState = {
  isOpen: false,
  name: '',
}

export const modalSlice = createSlice({
  initialState: initialState,
  name: 'modal',
  reducers: {

    openModal( state, { payload }: PayloadAction<{ name: ModalNames }> ) {
      state.isOpen = true
      state.name = payload.name
    },

    closeModal( state, {}: PayloadAction<undefined> ) {
      state.isOpen = initialState.isOpen
      state.name = initialState.name
    }

  }
})

export const { openModal, closeModal } = modalSlice.actions