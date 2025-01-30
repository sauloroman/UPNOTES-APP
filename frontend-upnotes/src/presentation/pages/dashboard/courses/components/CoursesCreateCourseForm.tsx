import React, { useState } from 'react';
import { useCourses, useModal, usePagination } from '../../../../shared/redux-hooks';
import { useForm } from '../../../../shared/hooks';
import { InputColor, InputCourseCategories, InputPeriod } from '../../../../shared/components';

const formData = {
  name: '',
  color: '',
  period: '1',
  categories: []
};

const formValidations = {
  name: [ (value: string) => value.trim().length > 0, 'El nombre del curso es obligatorio'],
  color: [ (value: string) => value.trim().length > 0, 'El color del curso es obligatorio'],
  period: [ (value: string) => value.length > 0, 'El periodo del curso es obligatorio'],
  categories: [ (value: string[]) => value.length > 0, 'Una categoría es necesaria'],
}

export const CoursesCreateCourseForm: React.FC = () => {
  const { onCloseModal } = useModal();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const {
    formState,
    name,
    nameValid,
    color,
    colorValid,
    periodValid,
    onInputChange,
    isFormValid,
    categoriesValid,
    onResetForm,
  } = useForm(formData, formValidations as any);
  const { createCourse } = useCourses()
  const { setCurrentPageAc } = usePagination("courses")

  const onCreateCourse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true)

    if ( !isFormValid ) return 

    createCourse({ ...formState, period: Number(formState.period)})
    setCurrentPageAc(1)
    setIsFormSubmitted( false )
    onCloseModal()
    onResetForm()
  };

  return (
    <form onSubmit={onCreateCourse} className="form create-course__form">

      <div className="form__field">
        <label htmlFor="course-name" className="form__label">
          Nombre del curso
        </label>
        <input
          name="name"
          value={name}
          onChange={onInputChange}
          placeholder="Ej. Fundamentos Matemáticos"
          type="text"
          id="course-name"
          className="form__input"
        />
        <span
          className={`${
            isFormSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {nameValid}
        </span>
      </div>

      <div className="form__field">
        <label className="form__label">Selecciona un color</label>
        <InputColor selectedColor={color} onChange={onInputChange} />
        <span
          className={`${
            isFormSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {colorValid}
        </span>
      </div>

      <div className="form__field">
        <label htmlFor="period" className="form__label">
          Selecciona un periodo:{' '}
        </label>
        <InputPeriod onChange={ onInputChange } />
        <span
          className={`${
            isFormSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {periodValid}
        </span>
      </div>

      <div className="form__field">
        <label htmlFor="period" className="form__label">
          Categorias:{' '}
        </label>
        <InputCourseCategories isFormSubmitted={isFormSubmitted} onChange={onInputChange} />
        <span
          className={`${
            isFormSubmitted && !isFormValid && 'u-text-red'
          } form__span`}
        >
          {categoriesValid}
        </span>
      </div>

      <div className="form__buttons flex flex-center">
        <button className="btn btn--black">Crear</button>
        <button onClick={onCloseModal} className="btn btn--white">
          Cancelar
        </button>
      </div>
    </form>
  );
};
