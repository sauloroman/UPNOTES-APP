import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoutesAuth, RoutesMain } from './'
import { AuthLayout, MainLayout } from '../layouts'

export const RoutesApp: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/auth/*' element={<RoutesAuth />} />
      </Routes>

      <MainLayout>
        <Routes>
          <Route path='/upnotes/*' element={<RoutesMain />} />
        </Routes>
      </MainLayout>
    </>
  )
}
