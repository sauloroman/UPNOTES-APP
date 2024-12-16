import { useDispatch, useSelector } from "react-redux"
import { CreateCourse, UpdateCourse } from "../../../domain/entities/course"
import { createCourseThunk } from "../../../infrastructure/store/thunks/courses/create-course.thunk"
import { getCoursesByUserThunk } from "../../../infrastructure/store/thunks/courses/get-courses-by-user.thunk"
import { RootState } from "../../../infrastructure/store/store"
import { updateCourseThunk } from "../../../infrastructure/store/thunks/courses/update-course.thunk"
import { setFavoritesCourses, setFilterCourses, setPeriodCourses } from "../../../infrastructure/store/slices/user.slice"

export const useCourses = () => {

  const dispatch = useDispatch<any>()

  const { courses: {courses, filter, period, favorites } } = useSelector( (state: RootState) => state.user)

  const createCourse = ( createCourse: CreateCourse ) => {
    dispatch( createCourseThunk( createCourse ) ) 
  }

  const updateCourse = ( courseId: string, updateCourse: UpdateCourse ) => {
    dispatch( updateCourseThunk( courseId, updateCourse ) )
  }

  const getCoursesByUser = ( category: string, period?: string, favorites?: string ) => {
    dispatch( getCoursesByUserThunk( category, period, favorites ) )
  }

  const setFilter = ( category: string ) => {
    dispatch( setFilterCourses(category) )
  }

  const setPeriod = ( period: string ) => {
    dispatch( setPeriodCourses(period) )
  }

  const setFavorites = ( favorites: string ) => {
    dispatch( setFavoritesCourses(favorites) )
  }

  return {
    courses, 
    filter,
    period,
    favorites,
    
    createCourse,
    getCoursesByUser,
    updateCourse,
    setFilter,
    setPeriod,
    setFavorites
  }

}