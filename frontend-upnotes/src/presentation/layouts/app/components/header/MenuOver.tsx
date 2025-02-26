import React from "react";
import { useAlert, useAuth, useMenu } from "../../../../shared/redux-hooks";
import { useNavigation } from "../../../../shared/hooks";

export const MenuOver: React.FC = () => {

  const { openMenuOver, closeMenuOver, isMenuOverShown } = useMenu()
  const { logoutAccount } = useAuth()
  const { onGoPage } = useNavigation()
  const { onShowAlert } = useAlert()

  const onLogoutAccount = () => {
    logoutAccount()
    closeMenuOver()
    onGoPage('/auth/login')
  }

  return (
    <div className="flex flex-center u-relative">
      
      <i 
        onClick={ isMenuOverShown ? closeMenuOver : openMenuOver } 
        className={`bx bx-chevron-${ isMenuOverShown ? 'up' : 'down' } icon icon--open-menu`}>
      </i>

      <div className={`main-layout-menu ${!isMenuOverShown && 'main-layout-menu--hidden' }`}>
        <p className="main-layout-menu__title">Menú de opciones</p>
        <ul className="main-layout-menu__nav flex">
          <li onClick={ () => onGoPage('/upnotes/profile')} className="main-layout-menu__item">
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
          <li onClick={ onLogoutAccount } className="main-layout-menu__item">
            <i className='bx bx-log-out icon icon--menu-over'></i>
            Cerrar Sesión
          </li>
        </ul>
      </div>
    </div>
  );
};
