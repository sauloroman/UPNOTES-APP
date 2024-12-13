import React from 'react'
import { usePeriods } from '../../../../../shared/hooks/usePeriods'

interface Props {
  onChange: ( target: any ) => void
}

export const InputPeriod: React.FC<Props> = ({ onChange }) => {
  const { periods } = usePeriods()
  return (
    <select name="period" onChange={onChange} id="period" className="form__input">
    {
      periods?.map( period => (
        <option 
          key={period} 
          value={period}
        >Periodo No. {period}</option>
      ))
    }
  </select>
  )
}
