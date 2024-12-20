import React from 'react';
import { CoursesCourseCard } from './';
import { Course } from '../../../../../domain/entities/course';

interface Props {
  courses: Course[]
}

export const CoursesList: React.FC<Props> = ({ courses }) => {
  return (
    <div className="courses-grid">
      {
        courses.map( course => (
          <CoursesCourseCard key={ course.id } course={course} />
        ))
      }
    </div>
  );
};
