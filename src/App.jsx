import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import canh from './assets/canh.jpg';
import trang from './assets/trang.png';
import nguyen from './assets/nguyen.jpg';
import huy from './assets/huy.png';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, QuesCanh, QuesHuy, QuesNguyen, QuesTrang } from './Container';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <div>

      {/* <Home/> */}
        <Routes>
          <Route path='/trang' element={<QuesTrang/>}/>
          <Route path='/nguyen' element={<QuesNguyen/>}/>
          <Route path='/huy' element={<QuesHuy/>}/>
          <Route path='/canh' element={<QuesCanh/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
