import React, { useState } from 'react'
import { LayoutAuthActions } from '../../../layouts/auth-actions/LayoutAuthActions'
import { useForm } from '../../../shared/hooks'
import { InputPassword } from '../../../shared/components/inputPasswod/InputPassword'

const formValidations = {
  newPassword: [ (value: string) => value.trim().length > 8, 'La contraseña debe tener al menos 8 caracteres' ]
}

export const ChangePassword: React.FC = () => {

  const { 
    isFormValid,
    newPassword, 
    newPasswordValid, 
    onInputChange 
  } = useForm({ newPassword: '' }, formValidations as any )
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const onChangePassword = ( e: React.ChangeEvent<HTMLFormElement> ) => {
    e.preventDefault();
    setIsFormSubmitted( true )
    if ( !isFormValid ) return

    setIsFormSubmitted( false )

  }

  return (
    <LayoutAuthActions title="Nueva contraseña">
      <p className='u-text-center u-margin-bottom-medium'>Ingrese una nueva contraseña para su cuenta</p>
      <form onSubmit={onChangePassword} action="#" className="form">
        <InputPassword value={newPassword} onChange={onInputChange} />
        <div className="flex flex-end">
          <span
            className={`${
              isFormSubmitted && !isFormValid && 'u-text-red'
            } form__span u-margin-top-xs`}
          >
            {newPasswordValid}
          </span>
        </div>
        <button className="btn btn--black u-margin-top-small">Cambiar la contraseña</button>  
      </form>
    </LayoutAuthActions>
  )
}
