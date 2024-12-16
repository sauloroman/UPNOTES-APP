import React from 'react'
import { usePeriods } from '../../../../../shared/hooks/usePeriods'
import { useCourses } from '../../../../../shared/redux-hooks'

export const PeriodSelect: React.FC = () => {
  const { periods } = usePeriods()
  const { setPeriod, period: selectedPeriod } = useCourses()

  return (
    <select onChange={ (e) => setPeriod( e.target.value) } className='form__input'>
      <option value="">Todos los periodos</option>
      {
        periods.map( period => (
          <option key={period} value={period} selected={ selectedPeriod === String(period) }>Periodo No. {period}</option>
        ))
      }
    </select>
  )
}
