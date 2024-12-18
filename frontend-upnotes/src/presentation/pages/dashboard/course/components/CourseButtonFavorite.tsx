import React from 'react';

interface CourseButtonFavoriteProps {
  isFavorite: boolean
}

export const CourseButtonFavorite: React.FC<CourseButtonFavoriteProps> = ({ isFavorite }) => {
  return (
    <div className="course-cover__favorite">
      {isFavorite ? (
        <button title='Eliminar de favoritos' className="flex flex-items-center btn btn--enable">
          <i className="bx bxs-star"></i>
        </button>
      ) : (
        <button title='Agregar a favoritos' className="flex flex-items-center btn btn--disable">
          <i className="bx bx-star"></i>
        </button>
      )}
    </div>
  );
};
