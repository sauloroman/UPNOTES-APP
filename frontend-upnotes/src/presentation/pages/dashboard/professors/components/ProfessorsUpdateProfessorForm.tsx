import React from 'react'

const emailRegExp: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const formData = {
  name: [ (value: string) => value.trim().length > 1, "El nombre de profesor es necesario" ],
  email: [ (value: string) => emailRegExp.test(value), "El email no es valido" ]
}

export const ProfessorsUpdateProfessorForm: React.FC = () => {
  
  
  
  return (
    <form className='form'>
      <div className="form__field">
        <label htmlFor="professor-name" className="form__label">Nombre del profesor</label>
        <input
          type="text" 
          className="form__input" 
        />
      </div>
    </form>
  )
}
