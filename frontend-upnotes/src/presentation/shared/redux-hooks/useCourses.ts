import { useDispatch, useSelector } from "react-redux"
import { CreateCourse, UpdateCourse } from "../../../domain/entities/course"
import { createCourseThunk } from "../../../infrastructure/store/thunks/courses/create-course.thunk"
import { getCoursesByUserThunk } from "../../../infrastructure/store/thunks/courses/get-courses-by-user.thunk"
import { RootState } from "../../../infrastructure/store/store"
import { updateCourseThunk } from "../../../infrastructure/store/thunks/courses/update-course.thunk"
import { setFilterCourses } from "../../../infrastructure/store/slices/user.slice"

export const useCourses = () => {

  const dispatch = useDispatch<any>()

  const { courses: {courses, filter} } = useSelector( (state: RootState) => state.user)

  const createCourse = ( createCourse: CreateCourse ) => {
    dispatch( createCourseThunk( createCourse ) ) 
  }

  const updateCourse = ( courseId: string, updateCourse: UpdateCourse ) => {
    dispatch( updateCourseThunk( courseId, updateCourse ) )
  }

  const getCoursesByUser = ( category: string ) => {
    dispatch( getCoursesByUserThunk( category ) )
  }

  const setFilter = ( category: string ) => {
    dispatch( setFilterCourses(category) )
  }

  return {
    courses, 
    filter,
    
    createCourse,
    getCoursesByUser,
    updateCourse,
    setFilter,
  }

}