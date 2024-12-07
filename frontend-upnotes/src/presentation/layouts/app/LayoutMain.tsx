import React from "react";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/Navigation";
import { Location } from "./components/location/Location";
import { useAlert, useMenu } from "../../shared/redux-hooks";
import { AlertApp } from "./components/alert/AlertApp";

interface MainLayoutProps {
  children: React.ReactNode;
  titleView: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, titleView }) => {
  
  const { isMenuAsideShown } = useMenu();
  const { isAlertShown } = useAlert()

  return (
    <>    
    <div>
      <header
        className={`main-layout-header flex flex-between ${
          !isMenuAsideShown && "main-layout-header--aside"
        }`}
      >
        <Header />
      </header>

      <div>
        <aside
          className={`main-layout-aside ${
            !isMenuAsideShown && "main-layout-aside--closed"
          }`}
        >
          <Navigation />
        </aside>
        <div
          className={`main-layout__container ${
            !isMenuAsideShown && "main-layout__container--small"
          }`}
        >
          <Location />

          <h1 className="main-layout-title">{titleView}</h1>
          {children}
        </div>
      </div>
    </div>
    { isAlertShown && <AlertApp />}
    </>
  );
};
