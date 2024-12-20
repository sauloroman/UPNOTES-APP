import React from 'react';
import { usePagination } from '../../../../shared/redux-hooks';

export const CoursesPagination: React.FC = () => {
  const { currentPage, totalOfPages, onNextPage, onPrevPage } =
    usePagination('courses');

  return (
    <>
      {totalOfPages !== 0 && (
        <div className="pagination">
          <p className="pagination__title">
            Páginas {currentPage} / {totalOfPages}
          </p>

          <div className="pagination__controls">
            {totalOfPages !== 1 && currentPage !== 1 && (
              <button
                onClick={() => onPrevPage()}
                className="btn btn--pagination"
              >
                <i className="bx bx-chevron-left"></i>
              </button>
            )}

            <p className="pagination__current">{currentPage}</p>

            {totalOfPages !== 1 && currentPage !== totalOfPages && (
              <button
                onClick={() => onNextPage()}
                className="btn btn--pagination"
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
