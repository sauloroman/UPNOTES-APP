import React from 'react';
import { LayoutCourse } from '../../../layouts';
import { useCourses, useModal } from '../../../shared/redux-hooks';
import { useNavigationPage } from '../../../shared/hooks';
import { CourseCover, CourseCreateTaskButton, CourseEditCourseModal, CourseProfessorsModal, CoursesInfo } from './components';
import { ModalNames } from '../../../../infrastructure/store/slices/modal.slice';

export const Course: React.FC = () => {
  const { courses } = useCourses();
  const { getToken } = useNavigationPage();
  const id = getToken();
  const course = courses.find((course) => course.id === id);
  const { isOpen, name } = useModal()

  return (
    <LayoutCourse>
      <div className="course">

        <CourseCover
          color={course?.color!}
          id={course?.id!}
          name={course?.name!}
          favorite={ course?.isFavorite! }
        />

        <CoursesInfo 
          categories={ course?.categories!}
          color={course?.color!}
          createdAt={course?.createdAt!}
          name={course?.name!}
          period={course?.period!}
          description={course?.description!}
          professor={course?.professor!}
        />

        <main className="course-main">

          <div className="course-buttons">
            <div className="course-buttons__container">
              <CourseCreateTaskButton />
              <form className="form course-filter">
                <select name="category" id="course-category" className="form__input course-filter__select">
                  <option defaultValue='' disabled>Categorías</option>
                  <option value="Presentación">Presentación</option>
                  <option value="Tarea">Tarea</option>
                  <option value="Examen">Examen</option>
                  <option value="Proyecto">Proyecto</option>
                  <option value="Trabajo en equipo">Trabajo en equipo</option>
                </select>
              </form>
            </div>
          </div>
          
        </main>

      </div>

      { (isOpen && name === ModalNames.professors) && <CourseProfessorsModal courseId={course?.id!} />}
      { (isOpen && name === ModalNames.editCourse) && <CourseEditCourseModal courseId={course?.id!} />}
    </LayoutCourse>
  );
};
