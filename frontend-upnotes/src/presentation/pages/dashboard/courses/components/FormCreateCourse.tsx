import React from 'react';
import { InputColor } from './InputColor';

export const FormCreateCourse: React.FC = () => {
  return (
    <form className="form create-course__form">
      <div className="form__field">
        <label htmlFor="course-name" className="form__label">
          Nombre del curso
        </label>
        <input
          placeholder="Ej. Fundamentos Matemáticos"
          type="email"
          id="course-name"
          className="form__input"
        />
      </div>
      <div className="form__field">
        <label className='form__label'>Selecciona un color</label>
        <InputColor />
      </div>
    </form>
  );
};
