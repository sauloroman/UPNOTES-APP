import React from 'react'
import { Header } from './components/header/Header'
import { Navigation } from './components/navigation/Navigation'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (    
    <div>
      <Header />

      <div>
        <Navigation />
        <div>{children}</div>
      </div>
    </div>
  )
}
