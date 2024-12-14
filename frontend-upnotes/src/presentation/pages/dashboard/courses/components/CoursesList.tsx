import React from 'react';
import { CourseCard } from './CourseCard';
import { Course } from '../../../../../domain/entities/course';

interface Props {
  courses: Course[]
}

export const CoursesList: React.FC<Props> = ({ courses }) => {
  return (
    <div className="courses-grid">
      {
        courses.map( course => (
          <CourseCard key={ course.id } course={course} />
        ))
      }
    </div>
  );
};
