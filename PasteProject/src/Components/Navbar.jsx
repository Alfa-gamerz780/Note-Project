import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import './animation.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to={'/'} className={({ isActive }) => isActive? "active-link": "" }>
          Home
        </NavLink>
        <NavLink to={'/pastes'} className={({ isActive }) => isActive? "active-link": "" }>
          Notes
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
