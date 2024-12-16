import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../../../domain/entities/course';

interface Courses {
  filter: string;
  courses: Course[];
  period?: string;
  favorites?: string;
}

interface InitialState {
  courses: Courses;
}

const initialState: InitialState = {
  courses: {
    filter: 'Todos',
    courses: [],
    period: undefined,
    favorites: undefined,
  },
};

export const userSlice = createSlice({
  initialState: initialState,
  name: 'user',
  reducers: {
    setCourses(state, { payload }: PayloadAction<Course[]>) {
      state.courses.courses = payload;
    },

    setFilterCourses(state, { payload }: PayloadAction<string>) {
      state.courses.filter = payload;
    },

    setPeriodCourses(state, { payload }: PayloadAction<string | undefined>) {
      state.courses.period = payload;
    },

    setFavoritesCourses(state, { payload }: PayloadAction<string | undefined>) {
      state.courses.favorites = payload;
    },
  },
});

export const {
  setFavoritesCourses,
  setPeriodCourses,
  setFilterCourses,
  setCourses,
} = userSlice.actions;
