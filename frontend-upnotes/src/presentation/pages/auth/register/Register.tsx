import React, { useState } from 'react';
import { AuthLayout } from '../../../layouts';
import { InputPassword } from '../../../shared/components/InputPassword';
import { useForm } from '../../../shared/hooks';

const formData = {
  email: '',
  gender: '',
  username: '',
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
    (value: string) => ['M', 'F'].includes( value ),
    "El género es necesario"
  ],
  username: [
    (value: string) => value.trim().length > 0,
    "El nombre es necesario"
  ]
};

export const Register: React.FC = () => {

  const { 
    email, emailValid, 
    gender, genderValid,
    password, passwordValid,
    username, usernameValid,
    onInputChange, isFormValid } = useForm(formData, formValidations as any)

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

  const onRegisterUser = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted( true )
    
    if (!isFormValid) return;
    

    setIsFormSubmitted( false )
  }

  return (
    <AuthLayout 
      title='Crear' 
      titleMain='Cuenta' 
      description='Comienza creando una cuenta para hacer de tu vida escolar algo más facil.'
      textNavigation='Si ya tienes una cuenta: '
      textLink="Ingresa aquí"
      page='login'
    >
      <form onSubmit={ onRegisterUser } action="#" className="form u-margin-bottom-medium">
        <div className="flex flex-column form__container">
          <div className="form__field">
            <label htmlFor="user-name" className="form__label">
              Nombre
            </label>
            <input
              name='username'
              value={username}
              onChange={ onInputChange }
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
            {usernameValid}
          </span>

          <div className="form__field">
            <label htmlFor="user-gender" className="form__label">
              Género
            </label>
            <select  
              className='form__input' 
              name="gender"
              value={gender}
              onChange={onInputChange}  
              id="user-gender"
            >
              <option className='form__option' value="" disabled selected>Selecciona una opción</option>
              <option className='form__option' value="F">Femeníno</option>
              <option className='form__option' value="M">Masculino</option>
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
              name='email'
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
    </AuthLayout>
  );
};
