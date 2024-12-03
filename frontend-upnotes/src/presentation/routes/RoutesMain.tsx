import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { 
  Analitics,
  Course,
  Courses,
  Home,
  Professors,
  Profile,
  Schedule,
  Scores,
  Settings,
  Task,
  Tasks,
} from '../pages/dashboard'

export const RoutesMain: React.FC = () => {
  return (
    <Routes>
      <Route path='/*' element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home />} />
      <Route path='analitics' element={<Analitics />} />
      <Route path='course/:id' element={<Course />} />
      <Route path='courses' element={<Courses />} />
      <Route path='professors' element={<Professors />} />
      <Route path='profile' element={<Profile />} />
      <Route path='schedule' element={<Schedule />} />
      <Route path='scores' element={<Scores />} />
      <Route path='settings' element={<Settings />} />
      <Route path='task/:id' element={<Task />} />
      <Route path='tasks' element={<Tasks />} />
    </Routes>
  )
}
