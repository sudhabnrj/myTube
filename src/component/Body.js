import React from 'react'
import { useSelector } from 'react-redux';
// import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Body = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

  return (
    <div className={`px-4 flex flex-col ${isMenuOpen ? 'ml-60' : 'ml-20'} `}>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
