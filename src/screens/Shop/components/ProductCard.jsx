import React from 'react'
import placeholder from '../../../assets/images/shirt.png'
import { MdArrowCircleRight } from 'react-icons/md'

function ProductCard({ data, updateCart }) {
  const handleClick = () => {
    const product = data
    updateCart(product)
  }
  return (
    <div className='flex flex-col justify-center items-center h-[800px]  mx-4'>
      <div className='w-64  max-h-60 z-10'>
        <img className='w-full' src={data.image} />
      </div>
      <div className='bg-white text-black flex flex-col justify-center items-center h-64 w-64 rounded-br-[120px] rounded-lg'>
        <p className='text-4xl px-8 mt-8'>{data.name}</p>

        <p className='px-2 mt-4 text-sm'>{data.subtitle}</p>
        <div className='flex flex-row justify-between items-center w-full pr-8'>
          <div className='flex justify-center items-baseline mr-auto mt-4'>
            <p className=' mx-2 text-lg font-light'>{data.price}.00</p>
            <span className='text-sm font-thin'>USD</span>
          </div>
          <MdArrowCircleRight className='text-6xl hover:text-blue-700 hover:translate-x-2 duration-150 ease-in-out hover:animate-pulse' />
        </div>
      </div>
      <button
        onClick={handleClick}
        className='mt-8 bg-gradient-to-br from-blue-700 to-indigo-500 p-4 w-full rounded-xl'>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
