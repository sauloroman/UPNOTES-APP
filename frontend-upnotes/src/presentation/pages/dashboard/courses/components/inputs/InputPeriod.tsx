import React from 'react'
import { usePeriods } from '../../../../../shared/hooks/usePeriods'

export const InputPeriod: React.FC = () => {
  const { periods } = usePeriods()

  return (
    <select name="period" id="period" className="form__input">
    {
      periods?.map( period => (
        <option value={period}>Periodo No. {period}</option>
      ))
    }
  </select>
  )
}
