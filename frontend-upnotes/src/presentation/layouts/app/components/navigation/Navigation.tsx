import React from "react";
import { useMenu } from "../../../../shared/redux-hooks";
import { NavigationList } from "./NavigationList";

export const Navigation: React.FC = () => {
  const { isMenuAsideShown, closeMenuAside, openMenuAside } = useMenu();

  return (
    <>
      <div className="main-layout-aside__container">
        <header className="flex flex-between main-layout-aside__header">
          <p
            className={`main-layout-aside__title ${
              !isMenuAsideShown && "u-hidden"
            }`}
          >
            UpNotes
          </p>

          <i
            onClick={isMenuAsideShown ? closeMenuAside : openMenuAside}
            className={`bx bxs-chevrons-${
              isMenuAsideShown ? "left" : "right"
            } icon icon--navigation`}
          ></i>
        </header>

        <nav className="main-layout-navigation">
          <NavigationList />
        </nav>
      </div>
    </>
  );
};
