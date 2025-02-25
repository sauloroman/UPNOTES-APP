import React, { useState } from "react";
import {
  useLoading,
  useModal,
  useProfessors,
} from "../../../../shared/redux-hooks";
import { useForm } from "../../../../shared/hooks";
import { Loader } from "../../../../shared/components";

const emailRegExp: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const formValidations = {
  name: [
    (value: string) => value.trim().length > 1,
    "El nombre del profesor es obligatorio",
  ],
  email: [ ( value: string ) => value && emailRegExp.test( value ), 'El email debe ser valido']
};

export const ProfessorsCreateProfessorForm: React.FC = () => {
  const { name, email,phone, formState, nameValid, isFormValid, onInputChange } = useForm(
    { name: "", email: null, phone: "" },
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

    createProfessor(formState);
    onCloseModal();
    setIsFormSubmitted(false);
  };

  return (
    <form onSubmit={onCreateProfessor} className="form professors-create-modal">
      <div className="form__field u-margin-bottom-small">
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
      <div className="form__field u-margin-bottom-medium">
        <label htmlFor="professor-email" className="form__label">
          Email del profesor:
        </label>
        <input
          name="email"
          value={email}
          onChange={onInputChange}
          id="professor-email"
          placeholder="Ingrese el nombre del profesor"
          type="email"
          className="form__input"
        />
      </div>
      <div className="form__field u-margin-bottom-medium">
        <label htmlFor="professor-phone" className="form__label">
          Teléfono del profesor:
        </label>
        <input
          name="phone"
          value={phone}
          onChange={onInputChange}
          id="professor-phone"
          placeholder="Ingrese el teléfono del profesor"
          type="tel"
          className="form__input"
        />
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
