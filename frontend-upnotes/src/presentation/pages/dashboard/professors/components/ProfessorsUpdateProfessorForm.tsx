import React, { useState } from 'react'
import { useForm } from '../../../../shared/hooks';
import { Professor } from '../../../../../domain/entities/professor';
import { useModal, useProfessors } from '../../../../shared/redux-hooks';

interface Props {
  professor: Professor,
}

const emailRegExp: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const formValidations = {
  name: [ (value: string) => value?.trim().length > 1, "El nombre de profesor es necesario" ],
  email: [ (value: string) => {
    if ( value?.trim().length > 0 ) {
      return emailRegExp.test(value)
    }
    return true
  }, "El email no es valido" ],
  phone: [ (value: string) => value?.trim().length <= 10, "El teléfono no debe exceder los 10 caracteres"],
}

export const ProfessorsUpdateProfessorForm: React.FC<Props> = ({ professor }) => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const { onCloseModal } = useModal()

  const { updateProfessorOfUser } = useProfessors()

  const { formState, name, nameValid, email, emailValid, phone, phoneValid, isFormValid, onInputChange, onResetForm } = useForm({
    name: professor.name,
    email: professor.email || null,
    phone: professor.phone || '',
  }, formValidations as any )

  const onUpdateProfessor = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    setIsFormSubmitted( true )

    if ( !isFormValid ) return 

<<<<<<< HEAD
    if (name === professor.name && email === professor.email && phone === professor.phone) {
      onCloseModal()
      return
    }

    updateProfessorOfUser( professor.id, formState )
    onCloseModal()
=======
    updateProfessorOfUser( professor.id, formState )
>>>>>>> 031799c63acadf8f71246fef2d72ee8b0b4efa33
    setIsFormSubmitted( false )
    onCloseModal()
    onResetForm()
  }

  return (
    <form onSubmit={onUpdateProfessor} className='form'>
      <div className="form__field u-margin-bottom-small">
        <label htmlFor="professor-name" className="form__label">Nombre del profesor</label>
        <input
          id='professor-name'
          name='name'
          value={name}
          onChange={onInputChange}
          type="text" 
          className="form__input" 
        />
        <span
            className={`${
              isFormSubmitted && !isFormValid && 'u-text-red'
            } form__span`}
          >
            {nameValid}
          </span>
      </div>
      <div className="form__field u-margin-bottom-small">
        <label htmlFor="professor-email" className="form__label">Email del profesor</label>
        <input
          id='professor-email'
          name='email'
          value={email}
          onChange={onInputChange}
          type="email" 
          className="form__input" 
        />
        <span
            className={`${
              isFormSubmitted && !isFormValid && 'u-text-red'
            } form__span`}
          >
            {emailValid}
          </span>
      </div>
      <div className="form__field u-margin-bottom-medium">
        <label htmlFor="professor-phone" className="form__label">Teléfono del profesor</label>
        <input
          id='professor-phone'
          name='phone'
          value={phone}
          onChange={onInputChange}
          type="tel" 
          className="form__input" 
        />
        <span
            className={`${
              isFormSubmitted && !isFormValid && 'u-text-red'
            } form__span`}
          >
            {phoneValid}
          </span>
      </div>
      <div className="form__buttons flex flex-center">
        <button className="btn btn--black">Actualizar Profesor</button>
        <button onClick={ onCloseModal } className="btn btn--white">Cancelar</button>
      </div>
    </form>
  )
}
