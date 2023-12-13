import React from 'react'
import { MdClose, MdDelete, MdShoppingCart } from 'react-icons/md'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SideCart({ closeCart, cartItems, removeItem }) {
  const handleDelete = (index) => {
    console.log(index)
    removeItem(index)
  }
  let cartTotal = 0

  const getCartTotal = () => {
    for (let i = 0; i < cartItems.length; i++) {
      cartTotal += cartItems[i].price
    }
  }

  useEffect(() => {
    getCartTotal()
  }, [])

  return (
    <div className='fixed bg-opacity-95 right-0 h-screen w-1/3 max-w-[900px] z-20 bg-white'>
      <div className='mt-8'>
        <MdClose onClick={closeCart} className='text-5xl' />
        <div className='flex flex-row justify-between items-baseline mt-8 mx-2'>
          <p className='text-5xl font-semibold'>Cart</p>
          <p className='text-3xl font-semibold'>
            {cartItems.length} <span className='text-xl font-light'>Items</span>
          </p>
        </div>
        <div className='mt-12'>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className='flex flex-row justify-between items-center px-4 text-sm my-4'>
              <img src={item.image} className='w-16' />
              <p className='w-24'>{item.name}</p>
              <p>{item.size}</p>
              <p>{item.price}.00</p>
              <MdDelete
                onClick={() => handleDelete(index)}
                className='text-xl'
              />
            </div>
          ))}
        </div>
        <div className='fixed bottom-40 right-0'>
          <div className='flex justify-end items-center'>
            <p>Total:</p>

            <p className='mx-2'>${cartTotal} USD</p>
          </div>
          <Link className='fixed bottom-10 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-md p-4 right-2 w-32 text-center hover:text-white hover:from-indigo-500 hover:to-indigo-500 duration-150 ease-linear'>
            Check Out
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideCart
