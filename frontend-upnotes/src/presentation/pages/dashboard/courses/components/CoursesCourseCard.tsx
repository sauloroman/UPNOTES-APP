import React from 'react';
import { CoursesFavoriteIcon } from './';
import { Course } from '../../../../../domain/entities/course';
import { dateFormatter } from '../../../../shared/utils/format-date';
import { useNavigation } from '../../../../shared/hooks';

interface Props {
  course: Course;
}

export const CoursesCourseCard: React.FC<Props> = ({ course }) => {

  const { onGoPage } = useNavigation()

  return (
    <div className="courses-card" style={{ backgroundColor: `${course.color}`}}>
      <div className="courses-card__content">
        <div className="courses-card__header">
          <p className="courses-card__date">{ dateFormatter.convertToLocalTime( new Date(course.createdAt).toString() ) }</p>
          <CoursesFavoriteIcon isFavorite={course.isFavorite} courseId={course.id} />
        </div>
        <div className="flex flex-end">
          <p className="courses-card__period">{course.period.numberPeriod}</p>
        </div>
        <div className="flex flex-between">
          <p className="courses-card__name">{course.name}</p>
        </div>
        <div className="courses-card__categories">
          {
            course.categories.map( category => (
              <p key={category} className="courses-card__category">{category}</p>
            ))
          }
        </div>
      </div>
      <footer className="courses-card__footer">
        <div className="courses-card__professor">
          <div className="courses-card__professor-info">
            <p>Profesor</p>
            <span>{course.professor?.name || 'Sin Profesor'}</span>
          </div>
        </div>
        <button onClick={ () => onGoPage(`/upnotes/course/${course.id}`)}  className="btn btn--black courses-card__button">
          Detalles
        </button>
      </footer>
    </div>
  );
};
