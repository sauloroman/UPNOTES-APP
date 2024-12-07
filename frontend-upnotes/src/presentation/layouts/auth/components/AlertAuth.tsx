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
    <LayoutModal width={50}>
      <div className={`alert alert--${alert.type}`}>
        <header className="alert__header flex flex-center">
          <i className="bx bx-info-circle alert__icon"></i>
          <p className="alert__title">{alert.title}</p>
        </header>
        <p className='alert__description'>{alert.description}</p>
        <div className="flex flex-center">
          <button onClick={onClickButton} className="btn alert__button">Aceptar</button>
        </div>
      </div>
    </LayoutModal>
  );
};
