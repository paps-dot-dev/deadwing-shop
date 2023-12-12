import React from 'react'
import { MdShoppingBag } from 'react-icons/md'

function CartButton() {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-black bg-white rounded-xl w-24 h-28 flex flex-col justify-center items-center font-semibold text-md p-4 mt-3'>
        <p className='text-3xl'>0</p>
        <p>Products</p>
      </div>
      <MdShoppingBag className='bg-black w-12 h-12 right-12 p-3 rounded-full -translate-y-[135px] ' />
    </div>
  )
}

export default CartButton