import React from 'react'
import "./App.css"
import Home from './pages/Home'
import { Route, Routes, } from 'react-router-dom'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home><PageOne/></Home>} />
    <Route path='/two' element={<Home><PageTwo/></Home>}/>
  
  
  </Routes>
  )
}

export default App
