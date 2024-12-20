import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store"
import { CreateCourse, UpdateCourse, GetCoursesByUser } from '../../../domain/entities/course';
import { setFavoritesCourses, setFilterCourses, setPeriodCourses } from "../../../infrastructure/store/slices/user.slice"
import { createCourseThunk, getCoursesByUserThunk, updateCourseThunk } from "../../../infrastructure/store/thunks/courses";

export const useCourses = () => {

  const dispatch = useDispatch<any>()

  const { courses: {courses, filter, period, favorites } } = useSelector( (state: RootState) => state.user)

  const createCourse = ( createCourse: CreateCourse ) => {
    dispatch( createCourseThunk( createCourse, {
      page: 1,
      category: filter,
      favorites: favorites, 
      period: period
    })) 
  }

  const updateCourse = ( courseId: string, updateCourse: UpdateCourse ) => {
    dispatch( updateCourseThunk( courseId, updateCourse, {
      page: 1,
      category: filter,
      favorites: favorites, 
      period: period
    }))
  }

  const getCoursesByUser = ( getCoursesByUser: GetCoursesByUser ) => {
    dispatch( getCoursesByUserThunk( getCoursesByUser ) )
  }

  const setFilter = ( category: string ) => {
    dispatch( setFilterCourses(category) )
  }

  const setPeriod = ( period: string ) => {
    dispatch( setPeriodCourses(period) )
  }

  const setFavorites = ( favorites: string | null ) => {
    dispatch( setFavoritesCourses(favorites!) )
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