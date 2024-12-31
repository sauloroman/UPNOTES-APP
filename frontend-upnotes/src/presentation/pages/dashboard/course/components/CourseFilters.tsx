import React from 'react';

export const CourseFilters: React.FC = () => {
  return (
    <form className="form course-filter">
      <select
        name="category"
        id="course-category"
        className="form__input course-filter__select"
      >
        <option defaultValue="" disabled>
          Categorías
        </option>
        <option value="Presentación">Presentación</option>
        <option value="Tarea">Tarea</option>
        <option value="Examen">Examen</option>
        <option value="Proyecto">Proyecto</option>
        <option value="Trabajo en equipo">Trabajo en equipo</option>
      </select>
    </form>
  );
};
