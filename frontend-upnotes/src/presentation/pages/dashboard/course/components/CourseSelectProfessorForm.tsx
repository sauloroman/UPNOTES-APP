  import React from 'react';
  import { CourseProfessorsLists } from './CourseProfessorsLists';
  import { useProfessors } from '../../../../shared/redux-hooks/useProfessors';
  import { useCourses, useModal } from '../../../../shared/redux-hooks';

  interface Props {
    courseId: string;
    setCreateNewProfessor: (value: boolean) => void;
  }

  export const CourseSelectProfessorForm: React.FC<Props> = ({
    courseId,
    setCreateNewProfessor,
  }) => {
    const { professors } = useProfessors();
    const { onCloseModal } = useModal();
    const { updateCourse } = useCourses()

    const onSelectProfessor = ( professorId: string ) => {
      updateCourse( courseId, { professorId })
      onCloseModal();
    }

    return (
      <form>
        <div className="form__field u-margin-bottom-small">
          <label htmlFor="professors" className="form__label">
            Profesores Existentes
          </label>
          <CourseProfessorsLists onSelectProfessor={onSelectProfessor} professors={professors} />
        </div>
        <p
          className="course-modal__text"
          onClick={() => setCreateNewProfessor(true)}
        >
          Deseo: <span>Crear un nuevo profesor</span>
        </p>
        <div className="flex flex-items-center course-modal__buttons">
          <button onClick={onCloseModal} className="btn btn--white">
            Cancelar
          </button>
        </div>
      </form>
    );
  };
