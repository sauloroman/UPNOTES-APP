import React from 'react';
import { LayoutCourse } from '../../../layouts';
import { useCourses } from '../../../shared/redux-hooks';
import { useNavigationPage } from '../../../shared/hooks';
import { CourseCover, CoursesInfo } from './components';

export const Course: React.FC = () => {
  const { courses } = useCourses();
  const { getToken } = useNavigationPage();
  const id = getToken();
  const course = courses.find((course) => course.id === id);

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
              <button className='btn btn--green course-buttons__create'>
                <i className='bx bx-check-circle'></i>
                Crear tarea
              </button>
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
    </LayoutCourse>
  );
};
