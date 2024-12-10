import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { 
  Login,
  ForgotPassword,
  Register,
  VerifyAccount 
} from '../pages/auth'
import { AlertAuth } from '../layouts/auth/components/AlertAuth'
import { useAlert } from '../shared/redux-hooks'

export const RoutesAuth: React.FC = () => {

  const { isAlertShown } = useAlert()

  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='verify-account/:token' element={<VerifyAccount />} />
        <Route path='/*' element={<Navigate to={'/auth/login'} />} />
      </Routes>
      { isAlertShown && <AlertAuth /> }
    </>
  )
}
