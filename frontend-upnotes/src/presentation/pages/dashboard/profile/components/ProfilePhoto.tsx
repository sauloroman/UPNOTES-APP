import React from 'react'

interface Props {
  photo: string | undefined,
  userName: string | undefined,
}

export const ProfilePhoto: React.FC<Props> = ({ photo, userName }) => {
  return (
    <>
      {
        photo 
        ? ( <img className='profile__photo' src={photo} alt="User photo" /> )
        : ( <div className='profile__initial'><p>{userName?.[0]}</p></div>) 
      }
    </>
  )
}
