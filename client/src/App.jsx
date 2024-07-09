import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Signnin from './pages/Signnin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/about' element={<About/>} ></Route>
    <Route path='/signup' element={<Signup/>} ></Route>
    <Route path='/signin' element={<Signnin/>} ></Route>
    <Route path='/dashboard' element={<Dashboard/>} ></Route>
    <Route path='/projects' element={<Projects/>} ></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App