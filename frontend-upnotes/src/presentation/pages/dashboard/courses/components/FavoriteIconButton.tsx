import React, { useRef } from 'react'

export const FavoriteIconButton: React.FC = () => {

  const ref = useRef<any>()

  const onFavorite = () => {
    ref.current.classList.remove('bx-bookmark')
    ref.current.classList.add('bxs-bookmark')
    ref.current.classList.add('u-color-favorite')
  }
  
  const onNoFavorite = () => {
    ref.current.classList.remove('bxs-bookmark')
    ref.current.classList.remove('u-color-favorite')
    ref.current.classList.add('bx-bookmark')
  }

  return (
    <i  
      onMouseEnter={ onFavorite }
      onMouseLeave={ onNoFavorite }
      ref={ref} 
      className='bx bx-bookmark courses-card__icon'>    
    </i>
  )
}
