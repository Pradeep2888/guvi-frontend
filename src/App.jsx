import { useState } from 'react'
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App
