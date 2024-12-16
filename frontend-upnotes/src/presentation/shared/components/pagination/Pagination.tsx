import React, { useState } from 'react'
import { usePagination } from '../../hooks/usePagination'

export const Pagination: React.FC = () => {

  const { onNextPage, onPrevPage, currentPage, totalOfPages } = usePagination()

  return (
    <div className='pagination flex flex-between'>
      <p className="pagination__title">Páginas</p>
      <div className="pagination__controls flex flex-between">
        {
          currentPage !== 1 &&
          (
            <button className="btn btn--pagination">
              <i className='bx bx-chevron-left pagination__icon'></i>
            </button>
          )
        }
        {
          totalOfPages !== 0 && (<span className='pagination__current'>{currentPage}</span>)
        }
        {
          (currentPage !== totalOfPages) && (totalOfPages !== 0) &&
          (
            <button className="btn btn--pagination">
              <i className='bx bx-chevron-right pagination__icon'></i>
            </button>
          ) 
        }
      </div>
    </div>
  )
}
