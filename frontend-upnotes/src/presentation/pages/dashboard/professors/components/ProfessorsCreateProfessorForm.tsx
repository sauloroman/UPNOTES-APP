import React, { useState } from "react";
import {
  useLoading,
  useModal,
  useProfessors,
} from "../../../../shared/redux-hooks";
import { useForm } from "../../../../shared/hooks";
import { Loader } from "../../../../shared/components";

const formValidations = {
  name: [
    (value: string) => value.trim().length > 1,
    "El nombre del profesor es obligatorio",
  ],
};

export const ProfessorsCreateProfessorForm: React.FC = () => {
  const { name, nameValid, isFormValid, onInputChange } = useForm(
    { name: "" },
    formValidations as any
  );

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { createProfessor } = useProfessors();
  const { onCloseModal } = useModal();
  const { isLoading } = useLoading();

  const onCreateProfessor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    if (!isFormValid) return;

    createProfessor({ name });
    onCloseModal();
    setIsFormSubmitted(false);
  };

  return (
    <form onSubmit={onCreateProfessor} className="form professors-create-modal">
      <div className="form__field u-margin-bottom-medium">
        <label htmlFor="professor-name" className="form__label">
          Nombre del profesor:
        </label>
        <input
          name="name"
          value={name}
          onChange={onInputChange}
          id="professor-name"
          placeholder="Ingrese el nombre del profesor"
          type="text"
          className="form__input"
        />
        <span
          className={`${
            isFormSubmitted && !isFormValid && "u-text-red"
          } form__span`}
        >
          {nameValid}
        </span>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="forms__buttons flex flex-center">
            <button className="btn btn--black">Crear Profesor</button>
            <button onClick={() => onCloseModal()} className="btn btn--white">
              Cancelar
            </button>
          </div>
        </>
      )}
    </form>
  );
};
