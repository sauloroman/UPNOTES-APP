import React from 'react'
import createCourse from '../../../../assets/images/create-course.svg'

export const CoursesDefault: React.FC = () => {
  return (
    <div className='default-courses'>
      <div className="default-courses__container">
        
        <div className="flex flex-column-center">
          <img className='default-courses__image' src={createCourse} alt="Create Course Image" />
          <h2 className="default-courses__title">Crea un Nuevo Curso</h2>
          <p className='paragraph u-text-center'>Comienza creando tu primer curso. <br /> Administra las tareas que le correspondan.</p>
        </div>

      </div>
    </div>
  )
}
