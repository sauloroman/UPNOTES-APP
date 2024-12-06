import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesAuth, RoutesMain } from "./";

export const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<RoutesAuth />} />
      <Route path="/upnotes/*" element={<RoutesMain />} />
      <Route path="/*" element={<Navigate to={'/auth/login'} />} />
    </Routes>
  );
};
