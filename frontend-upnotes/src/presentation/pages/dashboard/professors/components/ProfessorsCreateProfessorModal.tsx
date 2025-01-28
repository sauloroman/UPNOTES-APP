import React, { FormEvent, useState } from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'
import { useModal } from '../../../../shared/redux-hooks'
import { useForm } from '../../../../shared/hooks'

const formValidations = {
  name: [ (value: string) => value.trim().length > 0, "El nombre del profesor es obligatorio"]
}

export const ProfessorsCreateProfessorModal: React.FC = () => {

  const { name, nameValid, isFormValid, onInputChange } = useForm({ name: '' }, formValidations as any )
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const { onCloseModal } = useModal()

  const onCreateProfessor = ( e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault()
    setIsFormSubmitted(true)

    if ( !isFormValid ) return
  
    
    setIsFormSubmitted(false)
  }

  return (
    <LayoutModal width={60}>
      <form  onSubmit={onCreateProfessor} className="form professors-create-modal">
        <div className="form__field u-margin-bottom-medium">
          <label 
            htmlFor="professor-name" 
            className="form__label">Nombre del profesor: 
          </label>
          <input 
            name='name'
            value={ name }
            onChange={ onInputChange }
            id="professor-name" 
            placeholder='Ingrese el nombre del profesor' 
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
        <div className="forms__buttons flex flex-center">
          <button className="btn btn--black">Crear Profesor</button>
          <button onClick={() => onCloseModal()} className="btn btn--white">Cancelar</button>
        </div>
      </form>
    </LayoutModal>
  )
}
