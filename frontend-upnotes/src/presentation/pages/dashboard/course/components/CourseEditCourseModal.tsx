import React from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'
import { useCourses, useModal } from '../../../../shared/redux-hooks'
import { useForm, useNavigationPage } from '../../../../shared/hooks'
import { InputColor, InputPeriod } from '../../courses/components'

export const CourseEditCourseModal: React.FC = () => {

  const { onCloseModal } = useModal()
  const { getToken: getId } = useNavigationPage()
  const { courses } = useCourses()
  const courseId = getId()
  const course = courses.find( course => course.id === courseId )
  
  const { name, description, color, period, onInputChange} = useForm({
    name: course?.name,
    description: course?.description,
    color: course?.color,
    period: course?.period.numberPeriod,
  })

  return (
    <LayoutModal width={70}>
      
      <form action="#" className="form">
        
        <div className="form__field u-margin-bottom-small">
          <label htmlFor="name" className="form__label">Nombre del curso</label>
          <input 
            id='name'
            name='name'
            value={name}
            onChange={onInputChange}
            type="text" 
            className='form__input' 
          />
        </div>

        <div className="form__field u-margin-bottom-small">
          <label htmlFor="description" className="form__label">Descripción del curso</label>
          <textarea
            placeholder='Agrega una descripción del curso' 
            value={description} 
            onChange={onInputChange} 
            name="description" 
            id="description" 
            className='form__textarea'>
          </textarea>
        </div>

        <div className="form__field u-margin-bottom-small">
          <label className='form__label'>Color del curso</label>
          <InputColor selectedColor={color} onChange={onInputChange} />
        </div>

        <div className="form__field u-margin-bottom-small">
          <label className='form__label'>Color del curso</label>
          <InputPeriod onSelectedPeriod={period} onChange={onInputChange} />
        </div>

      </form>
      <button className='btn btn--green' onClick={onCloseModal}>Cancelar</button>
    </LayoutModal>
  )
}
