import React from 'react'
import Header from './components/Header'

function Base({ children }) {
  return (
    <div className='bg-hero-image bg-no-repeat bg-center'>
      <Header />
      {children}
    </div>
  )
}

export default Base
