import React, { useState } from 'react';

const filters: string[] = [
  'Todas',
  'Matemáticas',
  'Ciencias',
  'Idiomas',
  'Humanidades',
  'Especialidad',
  'Otro',
];

export const FilterButtons: React.FC = () => {
  const [filterActive, setFilterActive] = useState<string>(filters[0]);

  return (
    <div className="courses-filter">
      {filters.map((filterEl) => (
        <button
          onClick={() => setFilterActive(filterEl)}
          className={`btn btn--filter ${
            filterActive === filterEl && 'btn--filter-active'
          }`}
        >
          {filterEl}
        </button>
      ))}
    </div>
  );
};
