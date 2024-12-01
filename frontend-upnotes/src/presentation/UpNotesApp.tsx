import React from "react"
import { RoutesApp } from "./routes/RoutesApp"
import { BrowserRouter } from "react-router-dom"

export const UpNotesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  )
}
