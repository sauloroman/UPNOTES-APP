import React, { useEffect } from "react";

import { ModalNames } from "../../../../infrastructure/store/slices/modal.slice";

import { MainLayout } from "../../../layouts";

import { useCourses, useLoading } from "../../../shared/redux-hooks";
import { useModal } from "../../../shared/redux-hooks/useModal";

import { Loader, Pagination } from "../../../shared/components";
import {
  AddButton,
  CoursesList,
  CreateCourseModal,
  DefaultCoursesView,
  FavoriteButton,
  FilterButtons,
  PeriodSelect,
} from "./components";

export const Courses: React.FC = () => {
  const { isOpen, name } = useModal();
  const { isLoading } = useLoading();
  const { getCoursesByUser, courses, filter, period, favorites } = useCourses();

  useEffect(() => {
    getCoursesByUser({
      page: 1,
      category: filter,
      period,
      favorites,
    });
  }, [filter, period, favorites]);

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
              <Pagination />
            </div>
          </>
        )}
      </main>
      {isOpen && name === ModalNames.createCourse && <CreateCourseModal />}
    </MainLayout>
  );
};
