import React from 'react'
import { SearchInput } from './SearchInput'
import { OverMenu } from './OverMenu'
import { UserPhoto } from './UserPhoto'
import { UserInfo } from './UserInfo'
import logo from '../../../assets/images/logo-white.png'

export const Header: React.FC = () => {
  return (
    <header className='main-layout-header flex flex-between'>

      <div className='flex flex-center'>
        <div className='flex flex-center'>
          <img className='main-layout-header__img' src={ logo } alt="Logo UpNotesApp" />
        </div>
        <SearchInput />
      </div>

      <div className="flex flex-center">
        <UserInfo />
        <UserPhoto />
        <OverMenu />
      </div>

    </header>
  )
}
