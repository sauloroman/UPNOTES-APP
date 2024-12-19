import React, { useState } from 'react';
import { CreateProfessor } from '../../../../../domain/entities/professor';
import { useModal } from '../../../../shared/redux-hooks';
import { useForm } from '../../../../shared/hooks';
import { useProfessors } from '../../../../shared/redux-hooks/useProfessors';

const formData: CreateProfessor = {
  name: '',
};

const formValidations = {
  name: [
    (value: string) => value.trim().length > 0,
    'El nombre del profesor es obligatorio',
  ],
};

interface Props {
  setCreateNewProfessor: (value: boolean) => void;
}

export const CourseCreateProfessorForm: React.FC<Props> = ({
  setCreateNewProfessor,
}) => {
  const { onCloseModal } = useModal();
  const { name, nameValid, onInputChange, isFormValid } = useForm(
    formData,
    formValidations as any
  );
  const [formSubmitted, setformSubmitted] = useState(false);
  const { createProfessor } = useProfessors()

  const onCreateProfessor = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) return;

    createProfessor({ name })
    setformSubmitted(false);
    onCloseModal();
  };

  return (
    <form onSubmit={onCreateProfessor} className="course-modal form">
      <div className="form__field u-margin-bottom-small">
        <label className="form__label" htmlFor="name">
          Nombre del profesor
        </label>
        <input
          value={name}
          name="name"
          onChange={onInputChange}
          type="text"
          placeholder="Ingresa el nombre del profesor"
          className="form__input u-margin-bottom-small"
        />
        <span
          className={`${
            formSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {nameValid}
        </span>
      </div>
      <div
        onClick={() => setCreateNewProfessor(false)}
        className="course-modal__text"
      >
        <span>Seleccionar profesor</span>
      </div>
      <div className="flex flex-items-center course-modal__buttons">
        <button type="submit" className="btn btn--black">
          Crear
        </button>
        <button onClick={onCloseModal} className="btn btn--white">
          Cancelar
        </button>
      </div>
    </form>
  );
};
