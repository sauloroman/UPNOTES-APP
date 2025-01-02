import React, { useEffect } from 'react'
import { MainLayout } from '../../../layouts'
import { useProfessors } from '../../../shared/redux-hooks/useProfessors'
import { usePagination } from '../../../shared/redux-hooks'
import { ProfessorsList } from './components'

export const Professors: React.FC = () => {

  const { getProfessorsByUserPage } = useProfessors()
  const { currentPage } = usePagination('professors')

  useEffect(() => {
    getProfessorsByUserPage(currentPage)
  }, [ currentPage ])

  return (
    <MainLayout titleView='Tus Profesores'>
      <div className="professors">
        
        <ProfessorsList />
      </div>
    </MainLayout>
  )
}
