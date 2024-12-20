import React from 'react'
import { useCourses } from '../../../../shared/redux-hooks'
import { usePagination } from '../../../../shared/redux-hooks/usePagination'

export const CoursesFavoriteButton: React.FC = () => {

  const { setFavorites, favorites } = useCourses()
  const { setCurrentPageAc } = usePagination('courses')

  const onToggleFavorites = () => {
    setCurrentPageAc(1)
    if ( favorites ) {
      setFavorites(null)
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
