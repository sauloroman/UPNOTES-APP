import React from 'react';
import { useModal } from '../../../../shared/redux-hooks';
import { ModalNames } from '../../../../../infrastructure/store/slices/modal.slice';

export const CoursesCreateCourseButton: React.FC = () => {

  const { onOpenModal } = useModal()
  return (
    <div className='courses__add-button'>
      <button onClick={ () => onOpenModal( ModalNames.createCourse ) } className="btn btn--add">
        <i className="bx bx-plus icon icon--button"></i>
        Agregar Nuevo Curso
      </button>
    </div>
  );
};
