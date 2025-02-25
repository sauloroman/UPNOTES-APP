import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesAuth, RoutesMain } from "./";
import { useAuth, useMenu, useModal } from "../shared/redux-hooks";
import { AuthStatus } from "../../infrastructure/store/slices/auth.slice";

export const RoutesApp: React.FC = () => {
  const { status, renewToken } = useAuth()
  const { onCloseModal } = useModal()
  const { closeMenuOver } = useMenu()

  useEffect(() => {
    renewToken()

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if ( e.key === 'Escape' ) {
        onCloseModal();
      }
    })

    document.addEventListener('click', (e: any) => {
      if(!e.target.classList.contains('icon--open-menu')) {
        closeMenuOver()
      }
    })
  }, [])

  if ( status === AuthStatus.authenticated ) {
    return (
      <Routes>
        <Route path="/upnotes/*" element={<RoutesMain />} />
        <Route path='/*' element={<Navigate to="/upnotes/home" />} />
      </Routes> 
    )
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<RoutesAuth />} />
      <Route path='/*' element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
