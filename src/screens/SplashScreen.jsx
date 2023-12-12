import React from 'react'
import { useEffect } from 'react'
import teaser from '../assets/video/teaser.mp4'
import { useNavigate } from 'react-router-dom'

function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 10000)
  }, [])

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black'>
      <video controls autoplay muted className=''>
        <source src={teaser} type='video/mp4' />
      </video>
    </div>
  )
}

export default SplashScreen
