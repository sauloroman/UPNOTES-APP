import React, { useState } from "react";

export const OverMenu: React.FC = () => {

  const [isMenuOverOpen, setIsMenuOverOpen] = useState(false)

  return (
    <div className="flex flex-center u-relative">
      <i className="bx bx-chevron-down icon icon--open-menu"></i>
      <div className="main-layout-menu">
        <p className="main-layout-menu__title">Menú de opciones</p>
        <ul className="main-layout-menu__nav flex">
          <li className="main-layout-menu__item">
            <i className='bx bx-user icon icon--menu-over'></i>
            Perfíl
          </li>
          <li className="main-layout-menu__item">Configuración</li>
          <li className="main-layout-menu__item">Conctacto</li>
          <li className="main-layout-menu__item">Tema</li>
        </ul>
      </div>
    </div>
  );
};
