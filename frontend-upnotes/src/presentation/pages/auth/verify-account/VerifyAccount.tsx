import React from 'react';
import { useNavigationPage } from '../../../shared/hooks';
import { ValidationCodeForm } from './components/ValidationCodeForm';
import { LayoutAuthActions } from '../../../layouts/auth-actions/LayoutAuthActions';

export const VerifyAccount: React.FC = () => {
  const { getParams } = useNavigationPage();
  const { param, value } = getParams();

  return (
    <LayoutAuthActions title='Verifica tu correo electrónico'>
      <div className="auth-actions-layout__info">
        <p className="paragraph u-margin-bottom-small u-text-center">
          Un código de verificación ha sido enviado a:{' '}
        </p>
        <div className="flex flex-center">
          <p className="auth-actions-layout__email u-text-center">
            {param}: {value}
          </p>
        </div>
      </div>
      <p>
        Por favor revisa tu bandeja de entrada e ingresa el código de
        verificación abajo para validar tu dirección de correo electrónico. El
        código expirará en{' '}
        <span className="auth-actions-layout__time">10 minutos.</span>
      </p>

      <ValidationCodeForm email={value} />
    </LayoutAuthActions>
  );
};
