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

export const InputColor: React.FC = () => {
  return (
    <div className='form__circle'>
      {
        optionColors.map( optionColor => (
          <div className='form__circle-color' 
          style={{ backgroundColor: `${optionColor}` }}></div>
        ))
      }
    </div>
  )
}
