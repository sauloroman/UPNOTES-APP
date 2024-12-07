import React from "react";
import { NavLink } from "react-router-dom";
import { useMenu } from "../../../../shared/redux-hooks";
import { NavigationItemProps } from "../../../../../application";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  iconName,
  name,
  page,
}) => {

  const { isMenuAsideShown } = useMenu()

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
