import React, { useState } from 'react';
import { InputVerify } from './InputVerify';
import { useForm } from '../../../../shared/hooks';
import { useAuth, useUser } from '../../../../shared/redux-hooks';
import { NewCode } from './NewCode';

const formData = {
  box1: null,
  box2: null,
  box3: null,
  box4: null,
  box5: null,
}

interface ValidationCodeFormProps {
  email: string
}

export const ValidationCodeForm: React.FC<ValidationCodeFormProps> = ({email}) => {

  const { formState, onInputChange } = useForm( formData )
  const [error, setError] = useState<string | null>(null)
  const { validateUser } = useUser()
  const { generateVerificationCode } = useAuth()

  const onSubmitVerificationCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let code = ''  

    for( const valueBox of Object.values( formState )) {
      if ( !valueBox ) {
        return setError('El código no es válido')
      }
      code += valueBox
    }

    validateUser({code, email})

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
      <div className='u-margin-bottom-medium'>
        <button className="btn btn--green">Verificar</button>
      </div>
      { generateVerificationCode && <NewCode email={email} /> }
    </form>
  );
};
