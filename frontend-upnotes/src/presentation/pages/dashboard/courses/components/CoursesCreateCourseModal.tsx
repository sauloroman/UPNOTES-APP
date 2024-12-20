import { LayoutModal } from "../../../../layouts/modal/LayoutModal"
import { CoursesCreateCourseForm } from "./"

export const CoursesCreateCourseModal = () => {
  return (
    <LayoutModal width={80}>
      <div className="create-course">
        <header className="u-margin-bottom-small">
          <p className="create-course__title">Crear Nuevo Curso</p>
        </header>
        <div className="create-course__container">
          <CoursesCreateCourseForm />
        </div>
      </div>
    </LayoutModal>
  )
}
