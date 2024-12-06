import React from 'react'
import { InputList } from './components/InputList';

export const VerifyAccount: React.FC = () => {
  return (
    <div className='verify-account flex flex-center'>
      <div className="verify-account__container">
        <header className='verify-account__header flex flex-column-center'>
          <i className='bx bxs-envelope icon icon--verify'></i>
          <h1 className='verify-account__title'>Verifica tu correo electrónico</h1>
        </header>
        <div className="verify-account__content">
          <div className='verify-account__info'>
            <p className='paragraph u-margin-bottom-small u-text-center'>Un código de verificación ha sido enviado a: </p>
            <div className="flex flex-center">
              <p className='verify-account__email u-text-center'>romansantillan1998@outlook.com</p>
            </div>
          </div>
          <p>Por favor revisa tu bandeja de entrada e ingresa el código de verificación abajo para validar tu dirección de correo electrónico. El código expirará en <span className='verify-account__time'>10 minutos.</span></p>

          <form action="#" className='form-verify'>
            <InputList />
            <div>
              <button className='btn btn--green'>Verificar</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
