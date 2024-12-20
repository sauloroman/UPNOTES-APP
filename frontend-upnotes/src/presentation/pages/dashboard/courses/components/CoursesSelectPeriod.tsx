import React from 'react'
import { usePeriods } from '../../../../shared/hooks'
import { useCourses, usePagination } from '../../../../shared/redux-hooks'

export const CoursesSelectPeriod: React.FC = () => {
  const { periods } = usePeriods()
  const { setPeriod, period: selectedPeriod } = useCourses()
  const { setCurrentPageAc } = usePagination('courses')

  const onChangePeriod = ( period: string ) => {
    setPeriod( period )
    setCurrentPageAc(1)
  }

  return (
    <select onChange={ (e) => onChangePeriod( e.target.value) } className='form__input'>
      <option value="">Todos los periodos</option>
      {
        periods.map( period => (
          <option key={period} value={period} selected={ selectedPeriod === String(period) }>Periodo No. {period}</option>
        ))
      }
    </select>
  )
}
