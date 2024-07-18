import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return ( 
    <div className='fixed inset-x-0 bg-slate-900 z-20'>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>

        
        <NavLink to='/'>
          <div className='ml-5'>
            <img src={`${process.env.PUBLIC_URL}/Images/logo.png`} className="h-44"/>
          </div>
        </NavLink>
 

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to='/'>
            <p className='hover:text-lg transition-all ease-in'>Home</p>
          </NavLink>

          <NavLink to='/aboutus'>
            <p className='hover:text-lg transition-all ease-in'>About Us</p>
          </NavLink>

          <NavLink to='/contactus'>
            <p className='hover:text-lg transition-all ease-in'>Contact Us</p>
          </NavLink>

          <NavLink to='/faq'>
            <p className='hover:text-lg transition-all ease-in'>FAQ</p>
          </NavLink>
      
        </div>
      </nav>    
    </div>

  )
}

export default Navbar