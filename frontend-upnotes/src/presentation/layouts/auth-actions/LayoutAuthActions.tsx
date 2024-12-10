import React from 'react'
import { Loader } from '../../shared/components/loader/Loader'
import { useLoading } from '../../shared/redux-hooks'

interface LayoutAuthActionsProps {
  children: React.ReactNode,
  title: string,
}

export const LayoutAuthActions: React.FC<LayoutAuthActionsProps> = ({ children, title }) => {
  const { isLoading } = useLoading()

  return (
    <div className='auth-actions-layout flex flex-center'>
      <div className="auth-actions-layout__container">
        <header className='auth-actions-layout__header flex flex-column-center'>
          <i className='bx bxs-envelope icon icon--verify'></i>
          <h1 className='auth-actions-layout__title'>{title}</h1>
        </header>
        <div className="auth-actions-layout__content">
        {
            isLoading
            ? (
              <div className='flex flex-center'>
                <Loader />
              </div>
            )
            : (children)
          }       
        </div>
      </div>
    </div>
  )
}
