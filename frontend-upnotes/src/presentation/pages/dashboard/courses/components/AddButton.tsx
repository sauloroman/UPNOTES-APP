import React from 'react';

export const AddButton: React.FC = () => {
  return (
    <div className='courses__add-button'>
      <button className="btn btn--add">
        <i className="bx bx-plus icon icon--button"></i>
        Agregar Nuevo Curso
      </button>
    </div>
  );
};
