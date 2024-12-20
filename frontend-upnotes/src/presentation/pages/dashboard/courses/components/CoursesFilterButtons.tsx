import React from 'react';
import { useCategories } from '../../../../shared/hooks';
import { useCourses, usePagination } from '../../../../shared/redux-hooks';

interface FilterElement {
  icon: string,
  name: string,
  visibleName: string,
}

const filterElements: ({ [ key: string ]: FilterElement }) = {
  'Ciencia': {
    icon: 'bx-calculator',
    name: 'ciencia',
    visibleName: 'Ciencia'
  },
  'Matemáticas': {
    icon: 'bx-math',
    name: 'matematicas',
    visibleName: 'Matemáticas'
  },
  'Ingeniería': {
    icon: 'bx-cog',
    name: 'ingenieria',
    visibleName: 'Ingeniería'
  },
  'Idiomas': {
    icon: 'bx-user-voice',
    name: 'idiomas',
    visibleName: 'Idiomas'
  },
  'Humanidades': {
    icon: 'bx-heart',
    name: 'humanidades',
    visibleName: 'Humanidades'
  },
  'Programación': {
    icon: 'bx-code-alt',
    name: 'programacion',
    visibleName:  'Programación'
  },
  'Arte': {
    icon: 'bx-palette',
    name: 'arte',
    visibleName: 'Arte'
  },
  'Deporte': {
    icon: 'bx-football',
    name: 'deporte',
    visibleName: 'Deporte'
  },
  'Economía': {
    icon: 'bx-dollar-circle',
    name: 'economia',
    visibleName: 'Economía'
  },
  'Otro': {
    icon: 'bx-box',
    name: 'otro',
    visibleName: 'Otro'
  }
}

export const CoursesFilterButtons: React.FC = () => {
  const { courseCategories: filters } = useCategories()
  const { filter, setFilter } = useCourses()
  const { setCurrentPageAc } = usePagination('courses')

  const onChangeFilter = ( name: string ) => {
    setFilter( name )
    setCurrentPageAc(1)
  }

  return (
    <div className="courses-filter">
      <button
        onClick={() => onChangeFilter('Todos')}
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
        onClick={() => onChangeFilter( filterElements[filterEl].name ) }
        className={`btn btn--filter ${
          filterElements[filterEl].name === filter && 'btn--filter-active'
        }`}
        >
          <i className={`bx ${filterElements[filterEl].icon}`} />
          {filterEl}
        </button>
      ))}
    </div>
  );
};
