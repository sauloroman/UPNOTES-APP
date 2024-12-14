import { useDispatch } from "react-redux"
import { CreateCourse } from "../../../domain/entities/course"
import { createCourseThunk } from "../../../infrastructure/store/thunks/courses/create-course.thunk"

export const useCourses = () => {

  const dispatch = useDispatch<any>()

  const createCourse = ( createCourse: CreateCourse ) => {
    dispatch( createCourseThunk( createCourse ) ) 
  }

  return {
    createCourse
  }

}