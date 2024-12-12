import React from 'react';
import { CourseCard } from './CourseCard';

export const CoursesList: React.FC = () => {
  return (
    <div className="courses-grid">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};
