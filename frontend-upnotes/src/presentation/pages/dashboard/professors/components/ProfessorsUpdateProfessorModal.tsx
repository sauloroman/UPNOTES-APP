import React from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'
import { ProfessorsUpdateProfessorForm } from './'

export const ProfessorsUpdateProfessorModal: React.FC = () => {
  
  return (
    <LayoutModal width={70}>
      <ProfessorsUpdateProfessorForm />
    </LayoutModal>
  )
}
