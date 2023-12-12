import React from 'react'
import logo from '../../assets/images/deadwing-logo.jpeg'
import { Link } from 'react-router-dom'

function Shop() {
  return (
    <div>
      <header className='py-4'>
        <Link to={'/home'}>
          <img src={logo} className='w-24 rounded-full' />
        </Link>
      </header>
      <main>Shop</main>
    </div>
  )
}

export default Shop
