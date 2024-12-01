import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoutesAuth } from './RoutesAuth'
import { RoutesMain } from './RoutesMain'

export const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<RoutesAuth />} />
      <Route path='/*' element={<RoutesMain />} />
    </Routes>
  )
}
