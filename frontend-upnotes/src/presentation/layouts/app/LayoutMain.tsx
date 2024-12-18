import React from 'react';
import { Header } from './components/header/Header';
import { Navigation } from './components/navigation/Navigation';
import { Location } from './components/location/Location';
import { useAlert, useMenu } from '../../shared/redux-hooks';
import { AlertApp } from './components/alert/AlertApp';
import { useModal } from '../../shared/redux-hooks/useModal';

interface MainLayoutProps {
  children: React.ReactNode;
  titleView: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  titleView,
}) => {
  const { isMenuAsideShown } = useMenu();
  const { isAlertShown } = useAlert();
  const { isOpen } = useModal()

  return (
    <>
      <div>
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
            <Location />
            
            <h1 className="main-layout-title">{titleView}</h1>
            {children}
          </div>
        </div>
      </div>
      {isAlertShown && <AlertApp />}
    </>
  );
};
