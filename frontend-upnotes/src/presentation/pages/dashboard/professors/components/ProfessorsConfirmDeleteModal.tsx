import React from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'
import { useModal, useProfessors } from '../../../../shared/redux-hooks'

interface Props {
  professorId: string
}

export const ProfessorsConfirmDeleteModal: React.FC<Props> = ({ professorId }) => {

  const { professors, deleteProfessorOfUser } = useProfessors()
  const { onCloseModal } = useModal()
  const professor = professors.find( professor => professor.id === professorId )

  const onDeleteProfessor = ( id: string ) => {
    deleteProfessorOfUser({id})
    onCloseModal()
  }

  return (
    <LayoutModal width={60}>
      <div className="modal-confirm">
        <header className="modal-confirm__header">
          <p className='modal-confirm__title'>¿Está seguro de eliminar al profesor {professor?.name}?</p>
          <p className="modal-confirm__text">Esta acción ya no podrá ser revertida</p>
        </header>
        <div className="modal-confirm__buttons">
          <button onClick={ () => onDeleteProfessor( professorId ) } className="btn btn--white">Confirmar</button>
          <button onClick={ onCloseModal }  className="btn btn--black">Cancelar</button>
        </div>
      </div>
    </LayoutModal>
  )
}
