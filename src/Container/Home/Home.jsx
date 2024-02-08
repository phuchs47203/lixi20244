import React from 'react'
import './Home.css'
import canh from '../../assets/canh.jpg';
import trang from '../../assets/trang.png';
import nguyen from '../../assets/nguyen.jpg';
import huy from '../../assets/huy.png';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const Home = () => {
  return (
    <div id='home' className='app-home'>
        <h1 className='home-heading'>Luckey Money of Phuc Handsome</h1>
        <Link to="/trang" >
          <img src={trang} className="logo react imgcircle" alt="React logo1" />
        </Link>
        <Link to="/huy" >
          <img src={huy} className="logo react imgcircle" alt="React logo2" />
        </Link>
        <Link to="/nguyen">
          <img src={nguyen} className="logo react imgcircle" alt="React logo3" />
        </Link>
        <Link to="/canh">
          <img src={canh} className="logo react imgcircle" alt="React logo4" />
        </Link>  
        {/* <Link to="/canh" target="_blank">   chuyển sang mở link trong tab mới
          <img src={canh} className="logo react imgcircle" alt="React logo4" />
        </Link> */}
    </div>
  )
}

export default Home