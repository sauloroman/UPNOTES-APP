import React from 'react';
import { useAlert } from '../../../shared/redux-hooks';
import { LayoutModal } from '../../modal/LayoutModal';
import { AlertType } from '../../../../application';
import { useNavigation } from '../../../shared/hooks';

export const AlertAuth: React.FC = () => {
  const { alert, onClearAlert } = useAlert();
  const { onGoPage } = useNavigation()

  const onClickButton = () => {
    if ( alert.type === AlertType.error ) {
      onGoPage('/auth/login')
      onClearAlert();
      return;
    }

    onClearAlert();
  }

  return (
    <LayoutModal closeModal={onClearAlert} width={50}>
      <div className={`alert-auth alert-auth--${alert.type}`}>
        <header className="alert-auth__header flex flex-center">
          <i className="bx bx-info-circle alert-auth__icon"></i>
          <p className="alert-auth__title">{alert.title}</p>
        </header>
        <p className='alert-auth__description'>{alert.description}</p>
        <div className="flex flex-center">
          <button onClick={onClickButton} className="btn alert-auth__button">Aceptar</button>
        </div>
      </div>
    </LayoutModal>
  );
};
