import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import SplashScreen from './screens/SplashScreen'
import Shop from './screens/Shop/Shop'

function App() {
  return (
    <div className='bg-gray-800 h-screen text-white'>
      <Router>
        <Routes>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
