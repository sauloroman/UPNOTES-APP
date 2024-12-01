import React from 'react';
import { AuthLayout } from '../../layouts';

export const Login: React.FC = () => {
  return (
    <AuthLayout 
      title='Iniciar' 
      titleMain='Sesión' 
      description='Ponte al corriente con tus materias. Dale seguimiento a tus tareas y conviertete en el mejor de tu clase. Con UpNotes todo es más fácil.'
      textNavigation='Si no tienes una cuenta: '
      textLink="Crea una"
      page='register'
    >
      <form action="#" className="form u-margin-bottom-medium">
        <div className="flex flex-column form__container">
          <div className="form__field">
            <label htmlFor="user-email" className="form__label">
              Correo Electrónico
            </label>
            <input
              className="form__input"
              id="user-email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="form__field">
            <label htmlFor="user-password" className="form__label">
              Contraseña
            </label>

            <div className="form__field--password">
              <input
                className="form__input form__input--password"
                id="user-password"
                type="password"
                placeholder="Ingresa tu contraseña"
              />
              <i className="bx bx-show icon icon--form"></i>
            </div>
          </div>
          <div className="form__buttons">
            <button className="btn btn--black">Ingresar</button>
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
