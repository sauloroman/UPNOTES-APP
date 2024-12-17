import React, { useEffect } from "react";

import { ModalNames } from "../../../../infrastructure/store/slices/modal.slice";

import { MainLayout } from "../../../layouts";

import { useCourses, useLoading } from "../../../shared/redux-hooks";
import { useModal } from "../../../shared/redux-hooks/useModal";
import { usePagination } from "../../../shared/hooks/usePagination";

import { Loader } from "../../../shared/components";
import {
  AddButton,
  CoursesList,
  CreateCourseModal,
  DefaultCoursesView,
  FavoriteButton,
  FilterButtons,
  PeriodSelect,
  CoursesPagination
} from "./components";

export const Courses: React.FC = () => {
  const { isOpen, name } = useModal();
  const { isLoading } = useLoading();
  const { courses, getCoursesByUser, filter, period, favorites } = useCourses();
  const { currentPage } = usePagination('courses')

  useEffect(() => {
    getCoursesByUser({
      page: currentPage,
      category: filter,
      period: period,
      favorites: favorites,
    });
  }, [filter, period, favorites, currentPage ]);

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
              {courses.length > 0 ? (
                <CoursesList courses={courses} />
              ) : (
                <DefaultCoursesView />
              )}
              <CoursesPagination />
            </div>
          </>
        )}
      </main>
      {isOpen && name === ModalNames.createCourse && <CreateCourseModal />}
    </MainLayout>
  );
};
