import React from 'react'

const optionColors = [
  '#FBDBD4',
  '#DAEAE5',
  '#DADFE9',
  '#ECF4EF',
  '#FFCDCF',
  '#E6E9EE',
  '#FFD276',
]

interface Props {
  selectedColor: string;
  onChange: ( target: any ) => void
}

export const InputColor: React.FC<Props> = ({ selectedColor, onChange }) => {
  
  const onChangeColor = ( color: string ) => {
    onChange({ target: { name: 'color', value: color }})
  }
  
  return (
    <div className='input-color'>
      {
        optionColors.map( optionColor => (
          <div 
            key={optionColor}
            onClick={ () => onChangeColor(optionColor) }
            className={`input-color__circle ${selectedColor === optionColor && 'input-color__circle--active'}`} 
            style={{ backgroundColor: `${optionColor}` }}></div>
        ))
      }
    </div>
  )
}
