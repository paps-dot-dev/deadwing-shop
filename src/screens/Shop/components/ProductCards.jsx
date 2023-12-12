import React from 'react'
import ProductCard from './ProductCard'

function ProductCards() {
  return (
    <div className='flex flex-col md:flex-row justify-center  md:justify-between items-center'>
      <ProductCard />
    </div>
  )
}

export default ProductCards
