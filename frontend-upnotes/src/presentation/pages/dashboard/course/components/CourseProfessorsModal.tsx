import React, { useState } from 'react';
import { LayoutModal } from '../../../../layouts/modal/LayoutModal';
import { CourseCreateProfessorForm } from './CourseCreateProfessorForm';
import { CourseSelectProfessorForm } from './CourseSelectProfessorForm';

interface Props {
  courseId: string;
}

export const CourseProfessorsModal: React.FC<Props> = ({ courseId }) => {
  const [createNewProfessor, setCreateNewProfessor] = useState(false);

  return (
    <LayoutModal width={50}>
      {
        createNewProfessor 
          ? (
            <CourseCreateProfessorForm
              setCreateNewProfessor={setCreateNewProfessor}
            />
        ) : 
        (
          <CourseSelectProfessorForm
            courseId={courseId}
            setCreateNewProfessor={setCreateNewProfessor}
          />
        )
      }
    </LayoutModal>
  );
};
