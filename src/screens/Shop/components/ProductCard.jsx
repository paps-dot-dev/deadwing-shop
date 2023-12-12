import React from 'react'
import placeholder from '../../../assets/images/shirt.png'
import { MdArrowCircleRight } from 'react-icons/md'

function ProductCard() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img className='w-64 translate-y-[60px]' src={placeholder} />
      <div className='bg-white text-black flex flex-col justify-center items-center h-64 w-64 rounded-br-[120px] rounded-lg'>
        <div className='flex justify-between items-center w-[80px] pt-4'>
          <div className='w-4 h-4 rounded-full bg-gray-300'></div>
          <div className='w-4 h-4 rounded-full bg-red-800'></div>
          <div className='w-4 h-4 rounded-full bg-slate-800'></div>
        </div>
        <p className='text-4xl px-8 mt-8'>Cowboy Josh Shirt</p>

        <p className='px-2 mt-4 text-sm'>
          Here are some details about the product
        </p>
        <div className='flex flex-row justify-between items-center w-full pr-8'>
          <div className='flex justify-center items-center mr-auto mt-4'>
            <p className='mx-2 text-lg font-thin'>40.00</p>
            <span className='text-lg font-thin'>USD</span>
          </div>
          <MdArrowCircleRight className='text-6xl' />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
