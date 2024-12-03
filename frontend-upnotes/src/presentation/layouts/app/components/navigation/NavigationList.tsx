import React from "react";
import { NavigationItem, NavigationItemProps } from "./NavigationItem";

const navigationItems: NavigationItemProps[] = [
  {
    name: "Inicio",
    iconName: "home"
  }, 
  {
    name: 'Materias',
    iconName: "note"
  },
  {
    name: "Asignaciones",
    iconName: "task"
  }, 
  {
    name: "Calificaciones",
    iconName: "cube"
  }, 
  {
    name: "Professors",
    iconName: "ruler",
  },
  {
    name: "Estadísticas",
    iconName: "bar-chart-alt-2"
  },
  {
    name: "Agenda",
    iconName: "calendar",
  }
] 

export const NavigationList: React.FC = () => {
  return (
    <ul className="main-layout-navigation__list">
      {
        navigationItems.map( item => (
          <NavigationItem iconName={item.iconName} name={item.name} />
        ))
      }
    </ul>
  );
};
