import React, { useState } from 'react';
import { AuthLayout } from '../../../layouts';
import { InputPassword } from '../../../shared/components/InputPassword';
import { useForm } from '../../../shared/hooks/useForm';

const formData = {
  email: '',
  password: '',
};

const formValidations = {
  email: [
    (value: string) => value.trim().length > 0,
    'El correo es necesario',
  ],
  password: [
    (value: string) => value.trim().length > 0,
    'La contraseña es necesaria',
  ],
};

export const Login: React.FC = () => {
  const {
    email,
    emailValid,
    password,
    passwordValid,
    onInputChange,
    isFormValid,
  } = useForm(formData, formValidations as any);

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const onLoginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    if (!isFormValid) return;

    // TODO: Mandar peticion HTTP al backend para logear al usuario

    setIsFormSubmitted(false);
  };

  return (
    <AuthLayout
      title="Iniciar"
      titleMain="Sesión"
      description="Ponte al corriente con tus materias. Dale seguimiento a tus tareas y conviertete en el mejor de tu clase. Con UpNotes todo es más fácil."
      textNavigation="Si no tienes una cuenta: "
      textLink="Crea una"
      page="register"
    >
      <form
        onSubmit={onLoginUser}
        action="#"
        className="form u-margin-bottom-medium"
      >
        <div className="flex flex-column form__container">
          <div className="form__field">
            <label htmlFor="user-email" className="form__label">
              Correo Electrónico
            </label>
            <input
              name="email"
              value={email}
              onChange={onInputChange}
              className="form__input"
              id="user-email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
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
            <button type="submit" className="btn btn--black">
              Ingresar
            </button>
          </div>
        </div>
      </form>

      <div className="login__or flex flex-center">O también</div>

      <div className="login__google">
        <button className="btn btn--google flex flex-center">
          <i className="bx bxl-google"></i>
          Continuar con Google
        </button>
      </div>
    </AuthLayout>
  );
};
