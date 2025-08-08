import React from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  )
}

export default App
