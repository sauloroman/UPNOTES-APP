import React, { useEffect } from 'react';
import { ModalNames } from '../../../../infrastructure/store/slices/modal.slice';
import { MainLayout } from '../../../layouts';
import {
  useCourses,
  useLoading,
  usePagination,
} from '../../../shared/redux-hooks';
import { useModal } from '../../../shared/redux-hooks/useModal';
import { Loader } from '../../../shared/components';
import {
  CoursesCreateCourseButton,
  CoursesList,
  CoursesCreateCourseModal,
  CoursesDefault,
  CoursesFavoriteButton,
  CoursesFilterButtons,
  CoursesSelectPeriod,
  CoursesPagination,
} from './components';

export const Courses: React.FC = () => {
  const { isOpen, name } = useModal();
  const { isLoading } = useLoading();
  const { courses, getCoursesByUser, filter, period, favorites } = useCourses();
  const { currentPage } = usePagination('courses');

  useEffect(() => {
    getCoursesByUser({
      page: currentPage,
      category: filter,
      period: period,
      favorites: favorites,
    });
  }, [filter, period, favorites, currentPage]);

  return (
    <MainLayout titleView="Materias">
      <main className="courses">
        {isLoading ? (
          <div className="flex flex-center h-full">
            <Loader />
          </div>
        ) : (
          <>
            <header className="courses-header">
              <div className="flex flex-between">
                <CoursesCreateCourseButton />

                <div className="courses-buttons flex flex-center">
                  <CoursesFavoriteButton />
                  <CoursesSelectPeriod />
                </div>
              </div>
            </header>

            <div className="courses-container">
              <CoursesFilterButtons />
              {courses.length > 0 ? (
                <CoursesList courses={courses} />
              ) : (
                <CoursesDefault />
              )}
              <CoursesPagination />
            </div>
          </>
        )}
      </main>
      {isOpen && name === ModalNames.createCourse && (
        <CoursesCreateCourseModal />
      )}
    </MainLayout>
  );
};
