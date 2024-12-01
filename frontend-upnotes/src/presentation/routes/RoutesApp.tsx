import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoutesAuth, RoutesMain } from './'
import { AuthLayout, MainLayout } from '../layouts'

export const RoutesApp: React.FC = () => {
  return (
    <>
      <AuthLayout>
        <Routes>
          <Route path='/auth/*' element={<RoutesAuth />} />
        </Routes>
      </AuthLayout>

      <MainLayout>
        <Routes>
          <Route path='/*' element={<RoutesMain />} />
        </Routes>
      </MainLayout>
    </>
  )
}
