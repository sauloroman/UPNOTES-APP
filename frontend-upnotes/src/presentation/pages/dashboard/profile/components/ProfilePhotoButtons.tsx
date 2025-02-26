import React from 'react'

export const ProfilePhotoButtons: React.FC = () => {
  return (
    <div className="profile-header__buttons">
      <button className="btn btn--white">Cambiar foto</button>
      <button className="btn btn--error">
        <i className='bx bx-trash icon icon--button'></i>
        Eliminar foto
      </button>
    </div>
  )
}
