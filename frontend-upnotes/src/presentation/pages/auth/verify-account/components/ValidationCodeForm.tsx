import React, { useState } from 'react';
import { InputVerify } from './InputVerify';
import { useForm } from '../../../../shared/hooks';

const formData = {
  box1: null,
  box2: null,
  box3: null,
  box4: null,
  box5: null,
}

export const ValidationCodeForm: React.FC = () => {

  const { formState, onInputChange } = useForm( formData )
  const [error, setError] = useState<string | null>(null)

  const onSubmitVerificationCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for( const valueBox of Object.values( formState )) {
      if ( !valueBox ) {
        return setError('El código no es válido')
      }
    }

    // TODO: enviar solicitud HTTP al backend para validar cuenta
    setError(null)
  }

  return (
    <form onSubmit={ onSubmitVerificationCode } action="#" className="form-verify">
      <div className="flex flex-between u-margin-bottom-small">  
        {
          Object.entries(formState).map( ([key, value]) => (
            <InputVerify 
              key={key}
              nameBox={key}
              valueBox={value}
              onInputChange={onInputChange} 
            />
          ))
        }
      </div>
      <div className='flex flex-end u-margin-bottom-medium'>
        <span className='form__span u-text-red'>{error}</span>
      </div>
      <div>
        <button type='submit' className="btn btn--green">Verificar</button>
      </div>
    </form>
  );
};
