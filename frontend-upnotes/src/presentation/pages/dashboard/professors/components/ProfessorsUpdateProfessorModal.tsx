import React from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'
import { ProfessorsUpdateProfessorForm } from './'
import { useProfessors } from '../../../../shared/redux-hooks'

interface Props {
  professorId: string,
}

export const ProfessorsUpdateProfessorModal: React.FC<Props> = ({ professorId }) => {
  const { professors } = useProfessors()
  const professor = professors.find( professor => professor.id === professorId )!
  
  return (
    <LayoutModal width={70}>
      <ProfessorsUpdateProfessorForm professor={professor} />
    </LayoutModal>
  )
}
