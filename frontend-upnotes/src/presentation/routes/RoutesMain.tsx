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
  Settings,
  Task,
  Tasks,
} from '../pages/dashboard'

export const RoutesMain: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='courses' element={<Courses />} />
      <Route path='course/:id' element={<Course />} />
      <Route path='profile' element={<Profile />} />
      <Route path='analitics' element={<Analitics />} />
      <Route path='schedule' element={<Schedule />} />
      <Route path='settings' element={<Settings />} />
      <Route path='professors' element={<Professors />} />
      <Route path='tasks' element={<Tasks />} />
      <Route path='task/:id' element={<Task />} />
      <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}
