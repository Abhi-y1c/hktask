import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { Home } from './components/Home'
import { Display } from './components/Display'
import { Product } from './components/Add'
import { Search } from './components/Search'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          
          <Route path='/home' element={<Home/>}>
          <Route path='display' element={<Display/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='serach' element={<Search/>}/>       
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App