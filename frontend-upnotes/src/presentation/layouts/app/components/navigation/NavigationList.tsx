import React from "react";
import { NavigationItem } from "./NavigationItem";
import { navigationConfig } from "../../../../../application";

export const NavigationList: React.FC = () => {
  // TODO: crear filtro de navigationConfig dependiendo el rol de usuario
  return (
    <ul className="main-layout-navigation__list">
      {navigationConfig['user'].map((item) => (
        <NavigationItem
          key={item.name}
          iconName={item.iconName}
          name={item.name}
          page={item.page}
        />
      ))}
    </ul>
  );
};
