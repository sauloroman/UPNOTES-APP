import React from 'react'
import logo from '../../assets/images/logo.png'

interface LayoutModalProps {
  children: React.ReactNode,
  width: number,
  closeModal: () => void;
}

export const LayoutModal: React.FC<LayoutModalProps> = ({ width, closeModal, children }) => {
  return (
    <div className='modal flex flex-center animate__animated animate__fadeIn'>
      <div className="modal__container" style={{ width: `${width}rem` }}>
        <header className="modal__header flex flex-between">
          <div className='flex flex-center'>
            <img className='modal__image' src={logo} alt="Upnotes Logo" />
            <p className='modal__app'>UpNotes</p>
          </div>
          <i onClick={ closeModal } className='bx bx-x modal__close'></i>
        </header>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  )
}
