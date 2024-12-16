import React from 'react'
import { useCourses } from '../../../../../shared/redux-hooks'

export const FavoriteButton: React.FC = () => {

  const { setFavorites, favorites } = useCourses()

  const onToggleFavorites = () => {
    if ( favorites ) {
      setFavorites('')
      return
    }
    setFavorites('true')
  }

  return (
    <button onClick={ onToggleFavorites } className={`btn btn--favorite ${ favorites === 'true' && 'btn--favorite-active' } courses-buttons__favorite`}>
      <i className='bx bxs-bookmark'></i>
      <p>Cursos Favoritos</p>
    </button>
  )
}
