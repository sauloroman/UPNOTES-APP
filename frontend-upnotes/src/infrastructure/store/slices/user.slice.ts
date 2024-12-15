import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../../domain/entities/course";

interface Courses {
  filter: string;
  courses: Course[]
}

interface InitialState {
  courses: Courses;
}

const initialState: InitialState = {
  courses: {
    filter: 'Todos',
    courses: []
  }
}

export const userSlice = createSlice({
  initialState: initialState,
  name: 'user',
  reducers: {

    setCourses( state, { payload }: PayloadAction<Course[]> ) {
      state.courses.courses = payload
    },

    setFilterCourses( state, {payload}: PayloadAction<string> ) {
      state.courses.filter = payload
    }

  }
})

export const { setFilterCourses, setCourses } = userSlice.actions