import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../../domain/entities/course";

interface InitialState {
  courses: Course[];
}

const initialState: InitialState = {
  courses: []
}

export const userSlice = createSlice({
  initialState: initialState,
  name: 'user',
  reducers: {

    setCourses( state, { payload }: PayloadAction<Course[]> ) {
      state.courses = payload
    }

  }
})

export const { setCourses } = userSlice.actions