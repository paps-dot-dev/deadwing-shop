import { useState } from 'react'
import logo from '../../assets/images/deadwing-logo.jpeg'
import { Link } from 'react-router-dom'
import { MdShoppingBag } from 'react-icons/md'
import CartButton from './components/CartButton'
import ProductCards from './components/ProductCards'
import data from './data'
import SideCart from './components/SideCart'

function Shop() {
  const [cartItems, setCartItems] = useState([])
  const [openCart, setOpenCart] = useState(false)

  const removeItemFromCart = (id) => {
    console.log(id)
    setCartItems(cartItems.filter((_, index) => index !== id))
  }

  const showCart = () => {
    setOpenCart(true)
  }

  const hideCart = () => {
    setOpenCart(false)
  }

  const updateCart = (newProduct) => {
    setCartItems((prevState) => [...prevState, newProduct])
  }

  return (
    <>
      {openCart && (
        <SideCart
          removeItem={removeItemFromCart}
          closeCart={hideCart}
          cartItems={cartItems}
        />
      )}

      <header className='py-16 flex items-start justify-between px-4 bg-shop-header bg-[center_top_-30em] md:bg-cover h-[300px] bg-no-repeat'>
        <Link to={'/home'}>
          <img src={logo} className='w-24 rounded-full' />
        </Link>
        <CartButton showCart={showCart} count={cartItems.length} />
      </header>
      <main className='flex flex-col justify-center items-center bg-grunge'>
        <h1 className='text-5xl font-semibold text-center mt-8 bg-white text-black p-4 rounded-md'>
          Available for Pre-Order
        </h1>
        <ProductCards updateCart={updateCart} data={data} />
      </main>
    </>
  )
}

export default Shop
