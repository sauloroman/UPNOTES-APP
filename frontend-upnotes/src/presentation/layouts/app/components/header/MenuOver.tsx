import React from "react";
import { useMenu } from "../../../../shared/redux-hooks";

export const MenuOver: React.FC = () => {

  const { openMenuOver, closeMenuOver, isMenuOverShown } = useMenu()

  return (
    <div className="flex flex-center u-relative">
      
      <i 
        onClick={ isMenuOverShown ? closeMenuOver : openMenuOver } 
        className={`bx bx-chevron-${ isMenuOverShown ? 'up' : 'down' } icon icon--open-menu`}>
      </i>

      <div className={`main-layout-menu ${!isMenuOverShown && 'main-layout-menu--hidden' }`}>
        <p className="main-layout-menu__title">Menú de opciones</p>
        <ul className="main-layout-menu__nav flex">
          <li className="main-layout-menu__item">
            <i className='bx bx-user icon icon--menu-over'></i>
            Perfíl
          </li>
          <li className="main-layout-menu__item">
            <i className='bx bx-cog icon icon--menu-over'></i>
            Configuración
          </li>
          <li className="main-layout-menu__item">
            <i className='bx bx-moon icon icon--menu-over'></i>
            Tema Oscuro
          </li>
          <li className="main-layout-menu__item">
            <i className='bx bx-log-out icon icon--menu-over'></i>
            Cerrar Sesión
          </li>
        </ul>
      </div>
    </div>
  );
};
