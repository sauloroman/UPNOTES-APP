import React from 'react';
import { FavoriteIconButton } from './buttons/FavoriteIconButton';
import { Course } from '../../../../../domain/entities/course';
import { dateFormatter } from '../../../../shared/utils/format-date';

interface Props {
  course: Course;
}

export const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className="courses-card">
      <div className="courses-card__content">
        <div className="courses-card__header">
          <p className="courses-card__date">{ dateFormatter.convertToLocalTime( new Date(course.createdAt).toString() ) }</p>
          <FavoriteIconButton />
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
            <span>{course.professor || 'Sin Profesor'}</span>
          </div>
        </div>
        <button className="btn btn--black courses-card__button">
          Detalles
        </button>
      </footer>
    </div>
  );
};
