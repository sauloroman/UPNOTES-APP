import React from "react";
import { NavLink } from "react-router-dom";
import { useUISlice } from "../../../../shared/redux-hooks";

export interface NavigationItemProps {
  name: string;
  iconName: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  iconName,
  name,
}) => {

  const { isMenuAsideShown } = useUISlice()

  return (
    <NavLink
      className={({isActive}) =>
        `${
          isActive
            ? "main-layout-navigation__link--active"
            : "main-layout-navigation__link"
        }`
      }
      to="/upnotes"
    >
      <li className="main-layout-navigation__item">
        <i className={`bx bx-${iconName} icon icon--aside`}></i>
        <p className={`${!isMenuAsideShown && 'u-hidden'}`}>{name}</p>
      </li>
    </NavLink>
  );
};
