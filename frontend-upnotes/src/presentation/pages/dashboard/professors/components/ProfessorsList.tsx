import React from 'react'
import { useProfessors } from '../../../../shared/redux-hooks/useProfessors'

export const ProfessorsList: React.FC = () => {

  const { professors } = useProfessors()

  return (
    <table className='professors-table'>
      <thead className='professors-table__thead'>
        <tr>
          <th>Id</th>
          <th>Nombre del Profesor</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className="professors-table__tbody">
        {
          professors.map( professor => (
            <tr>
              <td>{professor.id.split('-')[0]}</td>
              <td className='professors-table__name'>
                <span className="professors-table__circle">{professor.name[0]}</span>
                {professor.name}
              </td>
              <td>{professor.email || 'No asignado'}</td>
              <td>{professor.phone || 'No asignado'}</td>
              <td className='professors-table__buttons'>
                <button className='btn btn--table'>Editar</button>
                <button className='btn btn--table'>Eliminar</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
