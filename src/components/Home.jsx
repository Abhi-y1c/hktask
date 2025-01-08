import React from 'react'
// import Logo from "../assets/Logo.png"
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem('token');
    navigate('/');

  }
  return (
   <>
     <nav className='nabvar'>
      <ul className='logo'>
          {/* <li><img width={"50px"} src={Logo} alt="Logo.png" /></li> */}
          <span className='logo1'>HackerKernel</span>
      </ul>
      <ul className='nav1'>
          <Link to="display">Display</Link>
          <Link to="product">Add-Product</Link>
          <Link to="serach">Search</Link>
      </ul>
      
     <ul> <button className='logoutbtn' onClick={logout}>Logout</button></ul>
      
     </nav>
     
     <ul><Outlet/></ul>
     {/* <footer className='footer'>© All Rights Reserved, HackerKernel a registered trademark of Compile Technologies Pvt Ltd</footer> */}
   </>
  )
}

 