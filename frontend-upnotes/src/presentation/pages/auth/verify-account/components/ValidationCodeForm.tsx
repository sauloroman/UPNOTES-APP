import React from 'react';
import { InputList } from './InputList';

export const ValidationCodeForm: React.FC = () => {
  return (
    <form action="#" className="form-verify">
      <InputList />
      <div>
        <button className="btn btn--green">Verificar</button>
      </div>
    </form>
  );
};
