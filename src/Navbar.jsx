import React from 'react'
import {  NavLink } from 'react-router-dom'
import './App.css'
const Navbar = () => {
  return (
      <div className='navbar' >
          <NavLink to='/cart'>Cart</NavLink>
    </div>
  )
}

export default Navbar