import React from 'react'
import { usePeriods } from '../../../../../shared/hooks/usePeriods'

interface Props {
  onSelectedPeriod?: string,
  onChange: ( target: any ) => void
}

export const InputPeriod: React.FC<Props> = ({ onSelectedPeriod, onChange }) => {
  const { periods } = usePeriods()
  return (
    <select name="period" onChange={onChange} id="period" className="form__input">
    {
      periods?.map( period => (
        <option 
          selected={ period === Number(onSelectedPeriod) }
          key={period} 
          value={period}
        >Periodo No. {period}</option>
      ))
    }
  </select>
  )
}
