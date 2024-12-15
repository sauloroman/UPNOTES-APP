import React, { useState } from 'react';
import { useCategories } from '../../../../../shared/hooks/useCategories';
import { useCourses } from '../../../../../shared/redux-hooks';

const filterIcons: any = {
  'Ciencia': 'bx-calculator',
  'Matemáticas': 'bx-math',
  'Ingeniería': 'bx-cog',
  'Idiomas': 'bx-user-voice',
  'Humanidades': 'bx-heart',
  'Programación': 'bx-code-alt',
  'Arte': 'bx-palette',
  'Deporte': 'bx-football',
  'Economía': 'bx-dollar-circle',
  'Otro': 'bx-box'
}

export const FilterButtons: React.FC = () => {
  const { courseCategories: filters } = useCategories()
  const { filter, getCoursesByUser, setFilter } = useCourses()

  const onSelectFilter = ( filterName: string ) => {
    setFilter( filterName )
  }

  return (
    <div className="courses-filter">
      <button
        onClick={() => onSelectFilter('Todos')}
        className={`btn btn--filter ${
          filter === 'Todos' && 'btn--filter-active'
        }`}
        >
          <i className='bx bx-info-circle' />
          Todos
        </button>
      {filters.map((filterEl) => (
        <button
        key={filterEl}
        onClick={() => onSelectFilter(filterEl)}
        className={`btn btn--filter ${
          filter === filterEl && 'btn--filter-active'
        }`}
        >
          <i className={`bx ${filterIcons[filterEl]}`} />
          {filterEl}
        </button>
      ))}
    </div>
  );
};
