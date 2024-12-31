import React from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'

interface Props {
  courseId: string,
}

export const CourseCreateTaskModal: React.FC<Props> = ({ courseId }) => {
  return (
    <LayoutModal width={80}>CourseCreateTaskModal</LayoutModal>
  )
}
