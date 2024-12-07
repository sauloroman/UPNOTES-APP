import React, { useState } from 'react';
import { useForm } from '../../../../shared/hooks';
import { RegisterUser, UserGender } from '../../../../../domain/entities';
import { useUser } from '../../../../shared/redux-hooks';
import { InputPassword } from '../../../../shared/components/inputPasswod/InputPassword';

const formData = {
  email: '',
  gender: UserGender.M,
  name: '',
  password: '',
};

const emailRegExp: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const formValidations = {
  email: [
    (value: string) => value.trim().length > 0 && emailRegExp.test(value),
    'El correo debe ser válido',
  ],
  password: [
    (value: string) => value.trim().length >= 8,
    'La contraseña debe tener al menos 8 caractéres',
  ],
  gender: [
    (value: string) => ['M', 'F'].includes(value),
    'El género es necesario',
  ],
  name: [(value: string) => value.trim().length > 0, 'El nombre es necesario'],
};

export const FormRegister: React.FC = () => {
  const {
    formState,
    email,
    emailValid,
    gender,
    genderValid,
    password,
    passwordValid,
    name,
    nameValid,
    onInputChange,
    isFormValid,
  } = useForm<RegisterUser>(formData, formValidations as any);

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const { registerUser } = useUser();

  const onRegisterUserEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    if (!isFormValid) return;

    registerUser({ ...formState });

    setIsFormSubmitted(false);
  };

  return (
    <form
      onSubmit={onRegisterUserEvent}
      action="#"
      className="form u-margin-bottom-medium"
    >
      <div className="flex flex-column form__container">
        <div className="form__field">
          <label htmlFor="user-name" className="form__label">
            Nombre
          </label>
          <input
            name="name"
            value={name}
            onChange={onInputChange}
            className="form__input"
            id="user-name"
            type="text"
            placeholder="Ingresa nombre(s)"
          />
        </div>
        <span
          className={`${
            isFormSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {nameValid}
        </span>

        <div className="form__field">
          <label htmlFor="user-gender" className="form__label">
            Género
          </label>
          <select
            className="form__input"
            name="gender"
            value={gender}
            onChange={onInputChange}
            id="user-gender"
          >
            <option
              className="form__option"
              value=""
              disabled
              defaultValue={''}
            >
              Selecciona una opción
            </option>
            <option className="form__option" value="F">
              Femeníno
            </option>
            <option className="form__option" value="M">
              Masculino
            </option>
          </select>
        </div>
        <span
          className={`${
            isFormSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {genderValid}
        </span>

        <div className="form__field">
          <label htmlFor="user-email" className="form__label">
            Email
          </label>
          <input
            name="email"
            value={email}
            onChange={onInputChange}
            className="form__input"
            id="user-email"
            type="email"
            placeholder="Registra un correo válido"
          />
        </div>
        <span
          className={`${
            isFormSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {emailValid}
        </span>

        <InputPassword value={password} onChange={onInputChange} />
        <span
          className={`${
            isFormSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {passwordValid}
        </span>

        <div className="form__buttons">
          <button className="btn btn--black">Crear Cuenta</button>
        </div>
      </div>
    </form>
  );
};
