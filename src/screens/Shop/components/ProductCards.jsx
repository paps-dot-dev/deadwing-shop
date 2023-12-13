import React from 'react'
import ProductCard from './ProductCard'
import { useState } from 'react'

function ProductCards({ data, updateCart }) {
  return (
    <div className='flex flex-col md:flex-row justify-center  md:justify-between items-center w-3/4 max-w-[1600px]'>
      {data.map((item) => (
        <ProductCard updateCart={updateCart} key={item.id} data={item} />
      ))}
    </div>
  )
}

export default ProductCards
