import React from 'react';
import { useAlert, useMenu, useModal } from '../../shared/redux-hooks';
import { AlertApp } from '../app/components/alert/AlertApp';
import { Navigation } from '../app/components/navigation/Navigation';
import { Header } from '../app/components/header/Header';

interface LayoutCourseProps {
  children: React.ReactNode;
}

export const LayoutCourse: React.FC<LayoutCourseProps> = ({ children }) => {
  const { isMenuAsideShown } = useMenu();
  const { isAlertShown } = useAlert();
  const { isOpen } = useModal();

  return (
    <>
      <header
        className={`main-layout-header flex flex-between ${
          !isMenuAsideShown && 'main-layout-header--aside'
        } ${isOpen && 'z-index-1 '}`}
      >
        <Header />
      </header>

      <div>
        <aside
          className={`main-layout-aside ${
            !isMenuAsideShown && 'main-layout-aside--closed'
          }  ${isOpen && 'z-index-1 '}`}
        >
          <Navigation />
        </aside>
        <div
          className={`main-layout__container animate__animated animate__fadeIn ${
            !isMenuAsideShown && 'main-layout__container--small'
          }`}
        >
          {children}
        </div>
      </div>
      {isAlertShown && <AlertApp />}
    </>
  );
};
