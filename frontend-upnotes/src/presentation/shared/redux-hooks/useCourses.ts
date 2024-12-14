import { useDispatch, useSelector } from "react-redux"
import { CreateCourse } from "../../../domain/entities/course"
import { createCourseThunk } from "../../../infrastructure/store/thunks/courses/create-course.thunk"
import { getCoursesByUserThunk } from "../../../infrastructure/store/thunks/courses/get-courses-by-user.thunk"
import { RootState } from "../../../infrastructure/store/store"

export const useCourses = () => {

  const dispatch = useDispatch<any>()

  const { courses } = useSelector( (state: RootState) => state.user)

  const createCourse = ( createCourse: CreateCourse ) => {
    dispatch( createCourseThunk( createCourse ) ) 
  }

  const getCoursesByUser = () => {
    dispatch( getCoursesByUserThunk() )
  }

  return {
    courses, 
    
    createCourse,
    getCoursesByUser,
  }

}