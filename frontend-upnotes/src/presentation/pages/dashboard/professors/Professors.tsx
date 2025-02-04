import React, { useEffect } from 'react'
import { MainLayout } from '../../../layouts'

import { useProfessors } from '../../../shared/redux-hooks/useProfessors'
import { useModal, usePagination } from '../../../shared/redux-hooks'
import { ModalNames } from '../../../../infrastructure/store/slices/modal.slice'

import { 
  ProfessorsList, 
  ProfessorsCreateProfessorButton, 
  ProfessorsCreateProfessorModal,
  ProfessorsUpdateProfessorModal,
  ProfessorsConfirmDeleteModal
} from './components'

export const Professors: React.FC = () => {

  const { getProfessorsByUserPage, professorIdToEditInModal, professorIdToDelete } = useProfessors()
  const { currentPage } = usePagination('professors')
  const { name, isOpen } = useModal()

  useEffect(() => {
    getProfessorsByUserPage(currentPage)
  }, [ currentPage ])

  return (
    <MainLayout>
      <div className="professors">
        <ProfessorsCreateProfessorButton />
        <ProfessorsList />

        { isOpen && name === ModalNames.createProfessor && <ProfessorsCreateProfessorModal />}
        { isOpen && name === ModalNames.updateProfessor && <ProfessorsUpdateProfessorModal professorId={professorIdToEditInModal} />}
        { isOpen && name === ModalNames.deleteProfessor && <ProfessorsConfirmDeleteModal professorId={professorIdToDelete} />}
      </div>
    </MainLayout>
  )
}
