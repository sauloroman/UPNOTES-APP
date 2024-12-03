import { NavigationItemProps } from "./types";

export const navigationItems: NavigationItemProps[] = [
  {
    name: "Inicio",
    iconName: "home",
    page: "/upnotes/home",
  },
  {
    name: "Materias",
    iconName: "note",
    page: "/upnotes/courses",
  },
  {
    name: "Asignaciones",
    iconName: "task",
    page: "/upnotes/tasks",
  },
  {
    name: "Calificaciones",
    iconName: "cube",
    page: "/upnotes/scores",
  },
  {
    name: "Professors",
    iconName: "ruler",
    page: "/upnotes/professors",
  },
  {
    name: "Estadísticas",
    iconName: "bar-chart-alt-2",
    page: "/upnotes/analitics",
  },
  {
    name: "Agenda",
    iconName: "calendar",
    page: "/upnotes/schedule",
  },
];
