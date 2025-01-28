import React from 'react'
import { useModal } from '../../../../shared/redux-hooks'
import { ModalNames } from '../../../../../infrastructure/store/slices/modal.slice'

export const ProfessorsCreateProfessorButton: React.FC = () => {

  const { onOpenModal } = useModal()

  return (
    <header className='flex flex-items-center flex-between professors-header'>
      <h2>Tus profesores creados</h2>
      <button onClick={() => onOpenModal(ModalNames.createProfessor)} className="btn btn--green professors-button-add">
        <i className='bx bx-plus'></i>
        Crear profesor
      </button>
    </header>
  )
}
