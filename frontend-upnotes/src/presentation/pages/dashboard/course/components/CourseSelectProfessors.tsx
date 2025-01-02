import React, { useEffect } from 'react';
import { useProfessors } from '../../../../shared/redux-hooks/useProfessors';
import { useModal } from '../../../../shared/redux-hooks';
import { ModalNames } from '../../../../../infrastructure/store/slices/modal.slice';

interface Props {
  professorOfCourse: { name: string | null };
}

export const CourseSelectProfessors: React.FC<Props> = ({
  professorOfCourse,
}) => {
  
   const { getProfessorsByUserModal } = useProfessors();
   const { onOpenModal } = useModal()
  
    useEffect(() => {
      getProfessorsByUserModal();
    }, []);
  
    return (
      <div>
        {
          professorOfCourse?.name
          ? (
            <div className='course-info__professor flex flex-items-center' onClick={() => onOpenModal(ModalNames.professors)}>
              <p className='course-info__initial'>{professorOfCourse.name[0]}</p>
              <p>{professorOfCourse?.name}</p>
            </div>
          )
          : (
            <button onClick={() => onOpenModal(ModalNames.professors)} className='btn btn--professor'>Asignar profesor</button>
          )
        }
      </div>
    );

};
