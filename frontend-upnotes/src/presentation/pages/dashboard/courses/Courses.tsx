import React, { useEffect } from 'react';
import { MainLayout } from '../../../layouts';
import { FilterButtons } from './components/buttons/FilterButtons';
import { CoursesList } from './components/CoursesList';
import { Pagination } from '../../../shared/components/pagination/Pagination';
import { FavoriteButton } from './components/buttons/FavoriteButton';
import { PeriodSelect } from './components/inputs/PeriodSelect';
import { CreateCourseModal } from './components/CreateCourseModal';
import { useModal } from '../../../shared/redux-hooks/useModal';
import { ModalNames } from '../../../../infrastructure/store/slices/modal.slice';
import { AddButton } from './components/buttons/AddButton';
import { useCourses, useLoading } from '../../../shared/redux-hooks';
import { Loader } from '../../../shared/components/loader/Loader';

export const Courses: React.FC = () => {
  const { isOpen, name } = useModal();
  const { isLoading } = useLoading();
  const { getCoursesByUser, courses } = useCourses()

  useEffect(() => {
    getCoursesByUser()
  }, [])

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
                <AddButton />
                <div className="courses-buttons flex flex-center">
                  <FavoriteButton />
                  <PeriodSelect />
                </div>
              </div>
            </header>

            <div className="courses-container">
              <FilterButtons />
              <CoursesList courses={courses} />
              <Pagination />
            </div>
          </>
        )}
      </main>
      {isOpen && name === ModalNames.createCourse && <CreateCourseModal />}
    </MainLayout>
  );
};
