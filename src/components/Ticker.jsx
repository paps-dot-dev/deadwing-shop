import React from 'react'
import Countdown from 'react-countdown'
import { useState, useEffect } from 'react'

function Ticker() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [inputDate, setInputDate] = useState('4 March 2024')
  const [currentDate, setCurrentDate] = useState(inputDate)

  useEffect(() => {
    setTimeout(() => {
      const changingDate = new Date(inputDate)
      const currentDate = new Date()
      const totalSeconds = (changingDate - currentDate) / 1000

      setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)))
      setHours(Math.floor(totalSeconds / 3600) % 24)
      setMinutes(Math.floor(totalSeconds / 60) % 60)
      setSeconds(Math.floor(totalSeconds % 60))
    }, 1000)
  })

  function formatTime(time) {
    return time < 10 ? `0${time}` : time
  }

  const onChangeHandler = (event) => {
    setInputDate(event.target.value)
  }

  const onClickHandler = () => {
    setCurrentDate(inputDate)
  }

  return (
    <div className='bg-gray-400 h-48 flex flex-col justify-center items-center p-8 rounded-xl mt-8'>
      <div className='flex flex-row justify-between items-center'>
        <div className=' flex flex-col justify-center items-center bg-gray-300 bg-opacity-70 p-4 rounded-md mx-2 text-red-700'>
          <p className='text-5xl md:text-[4.5em] font-semibold'>{days}</p>
          <span>Days</span>
        </div>
        <div className=' flex flex-col justify-center items-center   bg-gray-300 bg-opacity-70 p-4 rounded-md mx-2 text-red-700'>
          <p className='text-5xl md:text-[4.5em] font-semibold'>{hours}</p>
          <span>hours</span>
        </div>
        <div className=' flex flex-col justify-center items-center bg-gray-300 bg-opacity-70 p-4 rounded-md mx-2 text-red-700'>
          <p className='text-5xl md:text-[4.5em] font-semibold'>{minutes}</p>
          <span>mins</span>
        </div>
        <div className=' flex flex-col justify-center items-center bg-gray-300 bg-opacity-70 p-4 rounded-md mx-2 text-red-700'>
          <p className='text-5xl md:text-[4.5em] font-semibold'>{seconds}</p>
          <span>seconds</span>
        </div>
      </div>
      <div className='countdown-input-button'>
        <input className='countdown-input hidden' onChange={onChangeHandler} />
        <button className='countdown-button hidden' onClick={onClickHandler}>
          Countdown
        </button>
      </div>
    </div>
  )
}

export default Ticker
