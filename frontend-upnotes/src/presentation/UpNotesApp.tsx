import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../infrastructure/store/store"
import { RoutesApp } from "./routes"

export const UpNotesApp: React.FC = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </Provider>
  )
}
