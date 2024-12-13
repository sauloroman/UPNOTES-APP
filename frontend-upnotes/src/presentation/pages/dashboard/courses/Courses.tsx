import React from 'react'
import { MainLayout } from '../../../layouts'
import { FilterButtons } from './components/FilterButtons'
import { AddButton } from './components/AddButton'
import { CoursesList } from './components/CoursesList'
import { Pagination } from '../../../shared/components/pagination/Pagination'
import { FavoriteButton } from './components/FavoriteButton'
import { PeriodSelect } from './components/PeriodSelect'

export const Courses: React.FC = () => {
  return (
    <MainLayout titleView="Materias">
      <main className="courses">

        <header className="courses-header">
          <div className="flex flex-between">
            <AddButton />
            <div className='courses-buttons flex flex-center'>
              <FavoriteButton />
              <PeriodSelect />
            </div>
          </div>
        </header>
        
        <div className='courses-container'>
          <FilterButtons />
          <CoursesList />
          <Pagination />
        </div>

      </main>
    </MainLayout>
  )
}
