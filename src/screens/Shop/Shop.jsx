import React, { useState } from 'react'
import logo from '../../assets/images/deadwing-logo.jpeg'
import { Link } from 'react-router-dom'
import { MdShoppingBag } from 'react-icons/md'
import CartButton from './components/CartButton'
import ProductCards from './components/ProductCards'
import data from './data'

function Shop() {
  const [cartItems, setCartItems] = useState([])

  const updateCart = (newProduct) => {
    setCartItems((prevState) => [...prevState, newProduct])
  }

  return (
    <div>
      <header className='py-16 flex items-start justify-between px-4 bg-shop-header bg-[center_top_-30em] md:bg-cover h-[300px] bg-no-repeat'>
        <Link to={'/home'}>
          <img src={logo} className='w-24 rounded-full' />
        </Link>
        <CartButton count={cartItems.length} />
      </header>
      <main className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-semibold text-center mt-8 bg-white text-black p-4 rounded-md'>
          Available for Pre-Order
        </h1>
        <ProductCards updateCart={updateCart} data={data} />
      </main>
    </div>
  )
}

export default Shop
