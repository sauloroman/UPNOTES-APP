import React from 'react';
import { CourseButtonFavorite } from './';

interface CourseCoverProps {
  color: string;
  name: string;
  id: string;
  favorite: boolean;
}

export const CourseCover: React.FC<CourseCoverProps> = ({
  color,
  id,
  name,
  favorite,
}) => {
  return (
    <div className="course-cover">
      <div
        className="course-cover__color"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <div className="course-cover__info">
        <p className="course-cover__location">Curso / {name}</p>
        <div className="course-cover__name flex flex-items-center">
          <i className="bx bx-notepad"></i>
          <p>{name}</p>
        </div>
      </div>
      <CourseButtonFavorite isFavorite={favorite} />
      <div className="course-cover__actions">
        <button className="btn btn--cover btn--cover-edit">
          <i className="bx bx-pencil"></i>
          <p>Editar</p>
        </button>
        <button className="btn btn--cover btn--cover-delete">
          <i className="bx bx-trash"></i>
          <p>Eliminar</p>
        </button>
      </div>
    </div>
  );
};
