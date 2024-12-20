import React, { useState } from 'react'
import { LayoutModal } from '../../../../layouts/modal/LayoutModal'
import { useCourses, useModal } from '../../../../shared/redux-hooks'
import { useForm } from '../../../../shared/hooks'
import { InputColor, InputCourseCategories, InputPeriod } from '../../../../shared/components'

const formValidations = {
  name: [ (value: string) => value.trim().length > 0, 'El nombre es obligatorio'],
  description: [ (value: string) => value.length < 200, 'Máximo 200 caracteres'],
  color: [ (value: string) => value.length > 0, 'El color es obligatorio' ],
  categories: [ (values: string[]) => values.length > 0, 'Las categorias son obligatorias'],
  period: [ (value: string) => value.length > 0, 'El periodo es obligatorio' ]
}

interface Props {
  courseId: string
}

export const CourseEditCourseModal: React.FC<Props> = ({ courseId }) => {

  const { onCloseModal } = useModal()
  
  const { courses, updateCourse } = useCourses()
  const course = courses.find( course => course.id === courseId )
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const { 
    formState,
    name, nameValid, 
    description, descriptionValid, 
    color, colorValid, 
    categories, categoriesValid, 
    period, periodValid, 
    onInputChange,
    isFormValid,
  } = useForm({
    name: course?.name,
    description: course?.description || "",
    color: course?.color,
    period: course?.period.numberPeriod,
    categories: course?.categories,
  }, formValidations as any )

  const onUpdateCourse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitted( true )

    if ( !isFormValid ) return;

    updateCourse( courseId, {...formState, period: Number( formState.period )} )
    onCloseModal();
    setIsFormSubmitted( false )
  }

  return (
    <LayoutModal width={70}>
      
      <form onSubmit={ onUpdateCourse } action="#" className="form">
        
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
          <span className={`${ isFormSubmitted && !isFormValid && 'u-text-red'} form__span`}>{nameValid}</span>
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
          <span className={`${ isFormSubmitted && !isFormValid && 'u-text-red'} form__span`}>{descriptionValid}</span>
        </div>

        <div className="form__field u-margin-bottom-small">
          <label className='form__label'>Color del curso</label>
          <InputColor selectedColor={color} onChange={onInputChange} />
          <span className={`${ isFormSubmitted && !isFormValid && 'u-text-red'} form__span`}>{colorValid}</span>
        </div>

        <div className="form__field u-margin-bottom-small">
          <label className='form__label'>Color del curso</label>
          <InputPeriod onSelectedPeriod={period} onChange={onInputChange} />
          <span className={`${ isFormSubmitted && !isFormValid && 'u-text-red'} form__span`}>{periodValid}</span>
        </div>

        <div className="form__field u-margin-bottom-medium">
          <label className='form__label'>Categorías del curso</label>
          <InputCourseCategories 
            isFormSubmitted={isFormSubmitted}
            selectedCourseCategories={categories} 
            onChange={onInputChange} 
          />
          <span className={`${ isFormSubmitted && !isFormValid && 'u-text-red'} form__span`}>{categoriesValid}</span>
        </div>

        <div className="flex flex-items-center u-gap-2">
          <button className='btn btn--black'>Actualizar</button>
          <button className='btn btn--white' onClick={onCloseModal}>Cancelar</button>
        </div>
      </form>
    </LayoutModal>
  )
}
