import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ForgotPassword, Login, Register, VerifyAccount } from '../pages'

export const RoutesAuth: React.FC = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='verify-account' element={<VerifyAccount />} />
      <Route path='/*' element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
