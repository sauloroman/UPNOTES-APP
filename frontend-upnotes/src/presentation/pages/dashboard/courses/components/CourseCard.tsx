import React from 'react'

export const CourseCard: React.FC = () => {
  return (
    <div className='courses-card'>
      <div className="courses-card__content">
        <div className="courses-card__header">
          <p className="courses-card__date">20 Mayo, 2024</p>
          <i className='bx bx-bookmark courses-card__icon'></i>
        </div>
        <div className="flex flex-end">
          <p className="courses-card__period">1</p>
        </div>
        <div className="flex flex-between">
          <p className='courses-card__name'>Cálculo Diferencial</p>
        </div>
        <div className="courses-card__categories">
          <p className='courses-card__category'>Matemáticas</p>
          <p className='courses-card__category'>Ciencias</p>
        </div>
      </div>
      <footer className="courses-card__footer">
        <div className="courses-card__professor">
          <div className="courses-card__professor-info">
            <p>Profesor</p>
            <span>Danna Janeth Sánchez Carreón</span>
          </div>
        </div>
        <button className="btn btn--black courses-card__button">Detalles</button>
      </footer>
    </div>
  )
}
