import React from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CombinedLandingPage from './pages/CombinedLandingPage'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<CombinedLandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  )
}

export default App