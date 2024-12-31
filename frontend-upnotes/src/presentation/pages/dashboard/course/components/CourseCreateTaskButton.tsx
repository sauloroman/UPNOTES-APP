import React from 'react';
import { useModal } from '../../../../shared/redux-hooks';
import { ModalNames } from '../../../../../infrastructure/store/slices/modal.slice';

export const CourseCreateTaskButton: React.FC = () => {

  const { onOpenModal } = useModal()

  return (
    <button onClick={ () => onOpenModal(ModalNames.createTask)} className="btn btn--green course-buttons__create">
      <i className="bx bx-check-circle"></i>
      Crear Asignación
    </button>
  );
};
