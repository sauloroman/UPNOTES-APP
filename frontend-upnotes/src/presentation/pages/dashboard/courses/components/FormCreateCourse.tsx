import React from 'react';
import { InputColor } from './inputs/InputColor';
import { InputPeriod } from './inputs/InputPeriod';
import { useModal } from '../../../../shared/redux-hooks/useModal';

export const FormCreateCourse: React.FC = () => {

  const { onCloseModal } = useModal()

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
      <div className="form__field">
        <label htmlFor='period' className='form__label'>Selecciona un periodo: </label>
        <InputPeriod />
      </div>
      <div className="form__buttons flex flex-center">
        <button className="btn btn--black">Crear</button>
        <button onClick={ onCloseModal } className="btn btn--white">Cancelar</button>
      </div>
    </form>
  );
};
