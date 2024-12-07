import React from 'react';
import { AuthLayout } from '../../../layouts';
import { FormRegister } from './components/FormRegister';

export const Register: React.FC = () => {
  return (
    <AuthLayout
      title="Crear"
      titleMain="Cuenta"
      description="Comienza creando una cuenta para hacer de tu vida escolar algo más facil."
      textNavigation="Si ya tienes una cuenta: "
      textLink="Ingresa aquí"
      page="login"
    >
      <FormRegister /> 
    </AuthLayout>
  );
};
