import React from "react"

interface LoaderProps { 
  className?: string
}

export const Loader: React.FC<LoaderProps> = ( { className }) => {
  return (
    <div className={`loader ${className}`}></div>
  )
}
