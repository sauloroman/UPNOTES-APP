import React from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'
import { ProfessorsCreateProfessorForm } from './ProfessorsCreateProfessorForm'

export const ProfessorsCreateProfessorModal: React.FC = () => {
  return (
    <LayoutModal width={60}>
      <ProfessorsCreateProfessorForm />
    </LayoutModal>
  )
}
