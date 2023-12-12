import React from 'react'
import Base from '../layouts/Base'
import logo from '../assets/images/deadwing-logo.jpeg'
import Ticker from '../components/Ticker'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Base>
        <main className='flex flex-col justify-center items-center h-screen '>
          <img src={logo} alt='dead wing logo' className='rounded-full w-48' />
          <h1 className='text-3xl my-8 md:text-[4em] lg:text-[6em] font-bold'>
            We're Back. One Night Only.
          </h1>
          <Ticker />
          <div className='flex flex-col md:flex-row justify-center items-center mt-8 text-center w-full mx-auto'>
            <Link
              to={'/shop'}
              className='p-4 text-xl bg-gradient-to-br from-blue-700 to-purple-600 font-semibold rounded-lg mb-8 mx-4'>
              Pre-Order Exclusive Merch
            </Link>
            <Link
              to={'/'}
              className='p-4 text-xl bg-gradient-to-br from-gray-800 to-gray-600 font-semibold rounded-lg w-[250px] mb-8'>
              Get Tickets
            </Link>
          </div>
          <p className='text-xl'>March 9th, 2024</p>
          <p>The Noise Box</p>
        </main>
      </Base>
    </>
  )
}

export default Home
