import React from 'react';
import { useAlert, useAuth, useMenu, useModal } from '../../shared/redux-hooks';
import { AlertApp } from '../app/components/alert/AlertApp';
import { Navigation } from '../app/components/navigation/Navigation';
import { UserPhoto } from '../app/components/header/UserPhoto';

interface LayoutCourseProps {
  children: React.ReactNode;
}

export const LayoutProfile: React.FC<LayoutCourseProps> = ({ children }) => {
  
  const { isMenuAsideShown } = useMenu()
  const { isAlertShown } = useAlert()
  const { isOpen: isOpenModal } = useModal()
  const { logoutAccount } = useAuth()

  return (
    <div className='main-layout-profile'>
      <div className='main-layout-profile__container'>
        <aside
          className={`main-layout-aside ${
            !isMenuAsideShown && 'main-layout-aside--closed'
          }  ${isOpenModal && 'z-index-1 '}`}
        >
          <Navigation />

          <div className="main-layout-profile__bottom">
            {
              isMenuAsideShown
              ? (
                <>
                   <UserPhoto />
                   <p onClick={ () => logoutAccount() } className='main-layout-profile__logout'>Cerrar Sesión</p>
                </>
              )
              : ( <i onClick={ () => logoutAccount() }  className='bx bx-log-out icon icon--aside icon icon--aside--profile'></i> )
            }
          </div>
        </aside>
        <div
          className={`main-layout__container main-layout__profile animate__animated animate__fadeIn ${
            !isMenuAsideShown && 'main-layout__container--small main-layout__profile--small'
          }`}
        >
          {children}
        </div>
      </div>
      {isAlertShown && <AlertApp />}
    </div>
  );
};
