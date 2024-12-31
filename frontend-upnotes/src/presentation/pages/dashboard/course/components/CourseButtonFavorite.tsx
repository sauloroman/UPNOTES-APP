import React from 'react';
import { useCourses } from '../../../../shared/redux-hooks';

interface CourseButtonFavoriteProps {
  courseId: string,
  isFavorite: boolean
}

export const CourseButtonFavorite: React.FC<CourseButtonFavoriteProps> = ({ courseId, isFavorite }) => {

  const { updateCourse } = useCourses()

  const onChangeFavoriteStatus = ( status: boolean ) => {
    updateCourse( courseId, { isFavorite: status } )
  }

  return (
    <div className="course-cover__favorite">
      {isFavorite ? (
        <button onClick={ () => onChangeFavoriteStatus(false) } title='Eliminar de favoritos' className="flex flex-items-center btn btn--enable">
          <i className="bx bxs-star"></i>
        </button>
      ) : (
        <button onClick={ () => onChangeFavoriteStatus(true) } title='Agregar a favoritos' className="flex flex-items-center btn btn--disable">
          <i className="bx bx-star"></i>
        </button>
      )}
    </div>
  );
};
