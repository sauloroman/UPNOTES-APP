import React from "react";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/Navigation";
import { Location } from "./components/location/Location";
import { useUISlice } from "../../shared/redux-hooks";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  
  const { isMenuAsideShown } = useUISlice();

  return (
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
          {children}
        </div>
      </div>
    </div>
  );
};
