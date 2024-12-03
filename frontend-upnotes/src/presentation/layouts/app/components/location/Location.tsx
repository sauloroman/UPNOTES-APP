import React from 'react'
import { useNavigationPage } from '../../../../shared/hooks/useNavigationPage'

export const Location: React.FC = () => {

  const { getNamePage } = useNavigationPage()

  return (
    <div className='main-layout-location u-margin-bottom-small'>
      UpNotes <i className='bx bxs-chevron-right icon icon--location' ></i> {getNamePage()}
    </div>
  )
}
