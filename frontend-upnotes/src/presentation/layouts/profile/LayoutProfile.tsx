import React from 'react';
import { useAlert, useMenu, useModal } from '../../shared/redux-hooks';
import { AlertApp } from '../app/components/alert/AlertApp';
import { Navigation } from '../app/components/navigation/Navigation';
import { NavigationItem } from '../app/components/navigation/NavigationItem';
import { UserPhoto } from '../app/components/header/UserPhoto';

interface LayoutCourseProps {
  children: React.ReactNode;
}

export const LayoutProfile: React.FC<LayoutCourseProps> = ({ children }) => {
  const { isMenuAsideShown } = useMenu();
  const { isAlertShown } = useAlert();
  const { isOpen } = useModal();

  return (
    <div className='main-layout-profile'>
      <div className='main-layout-profile__container'>
        <aside
          className={`main-layout-aside ${
            !isMenuAsideShown && 'main-layout-aside--closed'
          }  ${isOpen && 'z-index-1 '}`}
        >
          <Navigation />

          <div className="main-layout-profile__bottom">
            <UserPhoto />
            <p className='main-layout-profile__logout'>Salir</p>
          </div>
        </aside>
        <div
          className={`main-layout-profile__content a  nimate__animated animate__fadeIn ${
            !isMenuAsideShown && 'main-layout__container--small'
          }`}
        >
          {children}
        </div>
      </div>
      {isAlertShown && <AlertApp />}
    </div>
  );
};
