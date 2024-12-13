import React from 'react'
import { usePeriods } from '../../../../../shared/hooks/usePeriods'

export const PeriodSelect: React.FC = () => {
  const { periods } = usePeriods()

  return (
    <select className='form__input'>
      <option value="all">Todos los periodos</option>
      {
        periods.map( period => (
          <option key={period} value={period}>Periodo No. {period}</option>
        ))
      }
    </select>
  )
}
