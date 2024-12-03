import React from "react";
import { NavLink } from "react-router-dom";
import { useUISlice } from "../../../../shared/redux-hooks";
import { NavigationItemProps } from "./types";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  iconName,
  name,
  page,
}) => {

  const { isMenuAsideShown } = useUISlice()

  return (
    <NavLink
      title={name}
      className={({isActive}) =>
        `${ isActive ? "main-layout-navigation__link--active" : "main-layout-navigation__link"}`
      }
      to={page}
    >
      <li className="main-layout-navigation__item">
        <i className={`bx bx-${iconName} icon icon--aside`}></i>
        <p className={`${!isMenuAsideShown && 'u-hidden'}`}>{name}</p>
      </li>
    </NavLink>
  );
};
