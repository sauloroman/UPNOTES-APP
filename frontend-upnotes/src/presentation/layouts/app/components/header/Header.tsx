import React from 'react'
import { SearchInput } from './SearchInput'
import { MenuOver } from './MenuOver'
import { UserPhoto } from './UserPhoto'
import { UserInfo } from './UserInfo'
import logo from '../../../../assets/images/logo.png'
import { useUISlice } from '../../../../shared/redux-hooks'

export const Header: React.FC = () => {

  const { isMenuAsideShown } = useUISlice()

  return (
    <header className={`main-layout-header flex flex-between ${ !isMenuAsideShown && 'main-layout-header--aside'}`}>

      <div className='flex flex-center'>
        <div className='flex flex-center'>
          <img className='main-layout-header__img' src={ logo } alt="Logo UpNotesApp" />
        </div>
        <SearchInput />
      </div>

      <div className="flex flex-center">
        <UserInfo />
        <UserPhoto />
        <MenuOver />
      </div>

    </header>
  )
}
