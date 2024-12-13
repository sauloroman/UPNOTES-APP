import { LayoutModal } from "../../../../layouts/modal/LayoutModal"
import { FormCreateCourse } from "./FormCreateCourse"

export const CreateCourseModal = () => {
  return (
    <LayoutModal width={80}>
      <div className="create-course">
        <header className="u-margin-bottom-small">
          <p className="create-course__title">Crear Nuevo Curso</p>
        </header>
        <div className="create-course__container">
          <FormCreateCourse />
        </div>
      </div>
    </LayoutModal>
  )
}
