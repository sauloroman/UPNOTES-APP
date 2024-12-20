import React from 'react';
import { dateFormatter } from '../../../../shared/utils/format-date';
import { CourseSelectProfessors } from './CourseSelectProfessors';

interface CourseInfoProps {
  categories: string[];
  name: string;
  createdAt: Date;
  period: { numberPeriod: number };
  color: string;
  professor?: { name: string | null };
  description?: string;
}

export const CoursesInfo: React.FC<CourseInfoProps> = ({
  categories,
  name,
  color,
  createdAt,
  period,
  professor,
  description,
}) => {
  return (
    <div className="course-info">
      <div className="course-info__container">
        <div className="course-info__tags">
          <div className="course-info__tag">
            <p className="course-info__key">Categorias</p>
            <div className="course-info__categories">
              {categories?.map((category) => (
                <p key={category} className="course-info__category">{category}</p>
              ))}
            </div>
          </div>
          <div className="course-info__tag">
            <p className="course-info__key">Asignatura</p>
            <p className="course-info__value">{name}</p>
          </div>
          <div className="course-info__tag">
            <p className="course-info__key">Creación</p>
            <p className="course-info__value">
              {dateFormatter.convertToLocalTime(createdAt)}
            </p>
          </div>
          <div className="course-info__tag">
            <p className="course-info__key">Periodo</p>
            <p className="course-info__value">{period.numberPeriod}</p>
          </div>
          <div className="course-info__tag">
            <p className="course-info__key">Profesor</p>
            <div className="course-info__value">
              <CourseSelectProfessors professorOfCourse={professor!} />
            </div>
          </div>
        </div>
        <div
          className="course-info__line"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div className="course-info__right">
          <div className="course-info__description">
            <p className="course-info__title">Acerca de la materia</p>
            <p className="course-info__text">
              {description ||
                'Puedes agregar una descripción pertinente a la materia con información adicional del curso.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
