import React from 'react'
import { usePeriods } from '../../hooks'

interface Props {
  selectedPeriod?: string,
  onChange: ( target: any ) => void
}

export const InputPeriod: React.FC<Props> = ({ selectedPeriod, onChange }) => {
  const { periods } = usePeriods()
  return (
    <select name="period" onChange={onChange} id="period" className="form__input">
    {
      periods?.map( period => (
        <option 
          selected={ period === Number(selectedPeriod) }
          key={period} 
          value={period}
        >Periodo No. {period}</option>
      ))
    }
  </select>
  )
}
