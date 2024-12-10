import React, { useState } from 'react';
import { LayoutAuthActions } from '../../../layouts/auth-actions/LayoutAuthActions';
import { useForm } from '../../../shared/hooks';

const formValidations = {
  email: [
    (value: string) => value.trim().length > 0,
    'El email es obligatorio',
  ],
};

export const ForgotPassword: React.FC = () => {
  const { formState, email, isFormValid, onInputChange, emailValid } = useForm(
    { email: '' },
    formValidations as any
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const onChangePassword = ( e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitted( true )

    if ( !isFormValid ) return
  
    

    setIsFormSubmitted( false )
  }

  return (
    <LayoutAuthActions title="Cambiar tu contraseña">
      <p className="u-text-center u-margin-bottom-medium">
        Para cambiar tu contraseña necesitas ingresar tu correo electrónico.
        Recibirás un email con la información pertinente para tu solicitud.
      </p>
      <form onSubmit={ onChangePassword } className="form">
        <div className="form__field">
          <label htmlFor="email-forgot" className="form__label">
            Ingresa tu correo electrónico
          </label>
          <input
            name='email'
            value={email}
            onChange={onInputChange}
            placeholder="correo@correo.com"
            id="email-forgot"
            type="email"
            className="form__input"
          />
        </div>
        <div className="flex flex-end u-margin-top-xs">
          <span
              className={`${
                isFormSubmitted && !isFormValid && 'u-text-red'
              } form__span`}
            >
              {emailValid}
          </span>
        </div>
        <button className='u-margin-top-small btn btn--black'>Recibir correo</button>
      </form>
    </LayoutAuthActions>
  );
};
