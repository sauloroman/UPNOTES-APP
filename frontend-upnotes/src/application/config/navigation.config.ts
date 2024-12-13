import { NavigationItemProps } from "../types/navigation-items-props";

export const navigationConfig: Record <string, NavigationItemProps[]> = {
  admin: [
    {
      name: "Dashboard",
      iconName: "dashboard",
      page: "/upnotes/dashboard",
    },
    {
      name: "Reportes",
      iconName: "reportes",
      page: "/upnotes/reports",
    },
    {
      name: "Usuarios",
      iconName: "Usuarios",
      page: "/upnotes/users",
    },
  ],
  user: [
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
      name: "Profesores",
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
  ]
};