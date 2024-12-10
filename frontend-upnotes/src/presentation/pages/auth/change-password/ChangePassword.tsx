import React, { useState } from 'react'
import { LayoutAuthActions } from '../../../layouts/auth-actions/LayoutAuthActions'
import { useForm, useNavigation, useNavigationPage } from '../../../shared/hooks'
import { InputPassword } from '../../../shared/components/inputPasswod/InputPassword'
import { useAuth } from '../../../shared/redux-hooks'

const formValidations = {
  password: [ (value: string) => value.trim().length > 8, 'La contraseña debe tener al menos 8 caracteres' ]
}

export const ChangePassword: React.FC = () => {

  const { 
    isFormValid,
    password, 
    passwordValid, 
    onInputChange 
  } = useForm({ password: '' }, formValidations as any )
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const { changePassword } = useAuth()
  const { getToken } = useNavigationPage()
  const { onGoPage } = useNavigation()

  const onChangePassword = ( e: React.ChangeEvent<HTMLFormElement> ) => {
    e.preventDefault();
    setIsFormSubmitted( true )
    if ( !isFormValid ) return

    changePassword({ password }, getToken() )
    onGoPage('/auth/login')
    setIsFormSubmitted( false )    
  }

  return (
    <LayoutAuthActions title="Nueva contraseña">
      <p className='u-text-center u-margin-bottom-medium'>Ingrese una nueva contraseña para su cuenta</p>
      <form onSubmit={onChangePassword} action="#" className="form">
        <InputPassword value={password} onChange={onInputChange} />
        <div className="flex flex-end">
          <span
            className={`${
              isFormSubmitted && !isFormValid && 'u-text-red'
            } form__span u-margin-top-xs`}
          >
            {passwordValid}
          </span>
        </div>
        <button className="btn btn--black u-margin-top-small">Cambiar la contraseña</button>  
      </form>
    </LayoutAuthActions>
  )
}
