import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UpNotesApp } from './presentation/UpNotesApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UpNotesApp />
  </StrictMode>,
)

