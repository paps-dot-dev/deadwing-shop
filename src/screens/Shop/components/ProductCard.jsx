import React from 'react'
import { useState } from 'react'
import placeholder from '../../../assets/images/shirt.png'
import { MdArrowCircleRight } from 'react-icons/md'
import ProductModal from './ProductModal'

function ProductCard({ data, updateCart }) {
  const handleClick = (size) => {
    const product = {
      name: data.name,
      size: size,
      price: data.price,
      image: data.image,
    }
    updateCart(product)
    closeModal()
  }

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
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
        </div>
      </div>
      <button
        onClick={openModal}
        className='mt-8 bg-gradient-to-br from-blue-700 to-indigo-500 p-4 w-full rounded-xl hover:text-white hover:-translate-y-1 duration-150 ease-in-out'>
        View Details
      </button>
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
        data={data}
        handleClick={handleClick}
      />
    </div>
  )
}

export default ProductCard
