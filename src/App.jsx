import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Home'
import TourReg from './pages/TourReg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournament-registration" element={<TourReg />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
