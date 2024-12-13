import React, { useState } from 'react';
import { useCategories } from '../../../../../shared/hooks/useCategories';

export const FilterButtons: React.FC = () => {
  const { courseCategories: filters } = useCategories()
  const [filterActive, setFilterActive] = useState<string>(filters[0]);

  return (
    <div className="courses-filter">
      {filters.map((filterEl) => (
        <button
          key={filterEl}
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
