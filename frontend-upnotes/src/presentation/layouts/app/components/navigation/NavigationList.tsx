import React from "react";
import { NavigationItem } from "./NavigationItem";
import { navigationItems } from "./navigation-list";

export const NavigationList: React.FC = () => {
  return (
    <ul className="main-layout-navigation__list">
      {navigationItems.map((item) => (
        <NavigationItem
          iconName={item.iconName}
          name={item.name}
          page={item.page}
        />
      ))}
    </ul>
  );
};
