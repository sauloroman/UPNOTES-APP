import React from 'react'
import { useProfessors } from '../../../../shared/redux-hooks/useProfessors'
import { useModal } from '../../../../shared/redux-hooks'
import { ModalNames } from '../../../../../infrastructure/store/slices/modal.slice'

export const ProfessorsList: React.FC = () => {

  const { professors, selectProfessorToEdit } = useProfessors()
  const { onOpenModal } = useModal()

  const onSelectProfessorToEditInModal = ( professorId: string ) => {
    onOpenModal( ModalNames.updateProfessor )
    selectProfessorToEdit( professorId )
  }

  return (
    <table className='professors-table'>
      <thead className='professors-table__thead'>
        <tr>
          <th><i className='bx bx-hash icon' ></i> Id</th>
          <th><i className='bx bx-rename icon' ></i>Nombre del Profesor</th>
          <th><i className='bx bx-envelope icon' ></i>Email</th>
          <th><i className='bx bx-phone icon' ></i>Teléfono</th>
          <th><i className='bx bx-hard-hat icon' ></i>Acciones</th>
        </tr>
      </thead>
      <tbody className="professors-table__tbody">
        {
          professors.map( professor => (
            <tr>
              <td>{professor.id.split('-')[0]}</td>
              <td className='professors-table__name'>
                <span className="professors-table__circle">{professor.name[0]}</span>
                <p>{professor.name}</p>
              </td>
              <td>{professor.email || 'No asignado'}</td>
              <td>{professor.phone || 'No asignado'}</td>
              <td className='professors-table__buttons'>
                <button onClick={() => onSelectProfessorToEditInModal(professor.id)} className='btn btn--table btn--table-edit'>Editar</button>
                <button className='btn btn--table  btn--table-delete'>Eliminar</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
