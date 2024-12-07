import React from 'react';
import { useAlert } from '../../../shared/redux-hooks';
import { LayoutModal } from '../../../layouts/modal/LayoutModal';

export const Alert: React.FC = () => {
  const { alert, onClearAlert } = useAlert();

  return (
    <LayoutModal closeModal={onClearAlert} width={50}>
      <div className={`alert alert--${alert.type}`}>
        <header className="alert__header flex flex-center">
          <i className="bx bx-info-circle alert__icon"></i>
          <p className="alert__title">{alert.title}</p>
        </header>
        <p className='alert__description'>{alert.description}</p>
        <div className="flex flex-center">
          <button onClick={onClearAlert} className="btn alert__button">
            Aceptar
          </button>
        </div>
      </div>
    </LayoutModal>
  );
};
