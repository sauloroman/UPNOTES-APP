import React from 'react';
import { Professor } from '../../../../../domain/entities/professor';

interface Props {
  onSelectProfessor?: ( professorId: string ) => void;
  professors: Professor[];
}

export const CourseProfessorsLists: React.FC<Props> = ({ onSelectProfessor, professors }) => {

  return (
    <select onChange={ e => onSelectProfessor!(e.target.value) } className='form__input' name="professor" id="professor">
      <option value="" selected disabled>Seleccionar Profesor</option>
      {
        professors.length != 0 
        ? (
          professors.map((professor) => (
            <option value={professor.id}>{professor.name}</option>
          ))
        )
        : (
          <option value="">No existen profesores creados</option>
        )
      }
     
    </select>
  );
};
