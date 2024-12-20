import React from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'
import { useCourses, useModal } from '../../../../shared/redux-hooks'
import { useNavigation } from '../../../../shared/hooks'

interface Props {
  courseId: string
}

export const CourseConfirmDeleteModal: React.FC<Props> = ({ courseId }) => {
  
  const { onCloseModal } = useModal()
  const { deleteCourse } = useCourses()
  const { onGoPage } = useNavigation()

  const onDeleteCourse = () => {
    deleteCourse( courseId )
    onGoPage('/upnotes/courses')
  }

  return (
    <LayoutModal width={50}>
      <div className="modal-confirm">
        <header className="modal-confirm__header">
          <p className='modal-confirm__title'>¿Está seguro de eliminar este curso?</p>
          <p className="modal-confirm__text">Esta acción ya no podrá ser revertida</p>
        </header>
        <div className="modal-confirm__buttons">
          <button onClick={ onDeleteCourse } className="btn btn--white">Confirmar</button>
          <button onClick={ onCloseModal }  className="btn btn--black">Cancelar</button>
        </div>
      </div>
    </LayoutModal>
  )
}
