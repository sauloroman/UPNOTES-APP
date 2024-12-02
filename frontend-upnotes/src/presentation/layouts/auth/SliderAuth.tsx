import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import image1 from '../../assets/images/login-1.svg'
import image2 from '../../assets/images/login-2.svg'
import image3 from '../../assets/images/login-3.svg'

const slidesAuth = [
  {
    id: 1,
    title: 'Organiza tus materias',
    description: 'Centraliza toda la información referente a tus planes de estudio.',
    img: image1,
  },
  {
    id: 2,
    title: 'Controla tus calificaciones',
    description: 'Tus calificaciones en un solo lugar, evita sorpresas inesperadas.',
    img: image2,
  },
  {
    id: 3,
    title: 'Evita perder tareas',
    description: 'Puedes asignar tareas, darles seguimiento y subir archivos.',
    img: image3,
  },
]

export const SliderAuth: React.FC = () => {
  return (
    <Swiper
      autoplay  
      modules={[ Autoplay, Pagination ]}
      style={{ width: '65rem', height: '85vh' }}
      spaceBetween={80}
      slidesPerView={1}
    >
      {
        slidesAuth.map( item => (
          <SwiperSlide>
            <div className='flex flex-column-center auth-layout__slider-card'>
              <img 
                className='auth-layout__slider-img' 
                src={item.img} 
                alt={item.title} 
              />
              <h2 className="auth-layout__slider-title">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
