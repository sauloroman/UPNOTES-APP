import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../../../domain/entities/course';
import { Professor } from '../../../domain/entities/professor';

interface Courses {
  filter: string;
  courses: Course[];
  period?: string;
  favorites?: string;
}

interface Professors {
  professors: Professor[]
}

interface InitialState {
  courses: Courses;
  professors: Professors
}

const initialState: InitialState = {
  courses: {
    filter: 'Todos',
    courses: [],
    period: undefined,
    favorites: undefined,
  },
  professors: {
    professors: []
  }
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

    setProfessors( state, { payload }: PayloadAction<Professor[]>) {
      state.professors.professors = payload
    }
  },
});

export const {
  setFavoritesCourses,
  setPeriodCourses,
  setFilterCourses,
  setCourses,
  setProfessors,
} = userSlice.actions;
