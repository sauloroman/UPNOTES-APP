import React from 'react';
import { useCourses } from '../../../../shared/redux-hooks';

interface Props {
  isFavorite: boolean;
  courseId: string;
}

export const CoursesFavoriteIcon: React.FC<Props> = ({ isFavorite, courseId }) => {
  const { updateCourse } = useCourses();

  const onToggleFavorite = () => {
    if ( !isFavorite ) {
      updateCourse(
        courseId, 
        { isFavorite: true }
      )
    } else {
      updateCourse(
        courseId, 
        { isFavorite: false }
      )
    }
  }

  return (
    <i
      onClick={onToggleFavorite}
      className={`bx ${isFavorite ? 'bxs-bookmark' : 'bx-bookmark'} courses-card__icon ${isFavorite && 'u-color-favorite'}`}
    ></i>
  );
};
