import React from 'react'
import { MainLayout } from '../../../layouts'

export const Courses: React.FC = () => {
  return (
    <MainLayout titleView="Materias">
      <div className="courses">

        <header className="courses-header flex flex-between">
          <div className="courses-filter flex">
            <span className="courses-filter__span">Todo</span>
          </div>
          <div className="courses-buttons">
            <button className='btn btn--filter'>
              <i className='bx bx-filter-alt icon icon--button'></i>
              <p>Filter</p>
            </button>
            <button className='btn btn--add'>
              <i className='bx bx-plus icon icon--button'></i>
              Agregar
            </button>
          </div>
        </header>
        

      </div>
    </MainLayout>
  )
}
