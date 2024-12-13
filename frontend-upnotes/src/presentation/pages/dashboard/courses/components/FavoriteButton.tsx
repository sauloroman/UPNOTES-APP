import React from 'react'

export const FavoriteButton: React.FC = () => {
  return (
    <button className='btn btn--favorite courses-buttons__favorite'>
      <i className='bx bxs-bookmark'></i>
      <p>Cursos Favoritos</p>
    </button>
  )
}
