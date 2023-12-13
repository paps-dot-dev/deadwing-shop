import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import SplashScreen from './screens/SplashScreen'
import Shop from './screens/Shop/Shop'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
