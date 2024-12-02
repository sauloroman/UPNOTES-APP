import React from 'react'
import { Header } from './components/Header'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (    
    <div>
      <Header />

      <div>
        <aside>AsideMenu</aside>
        <div>{children}</div>
      </div>
    </div>
  )
}
