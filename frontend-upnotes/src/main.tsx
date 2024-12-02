import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UpNotesApp } from './presentation/UpNotesApp.tsx'
import './presentation/styles/app.scss'
import 'swiper/css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UpNotesApp />
  </StrictMode>
)

