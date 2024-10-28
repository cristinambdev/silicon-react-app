import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className="navbar">
                <NavLink className="nav-link" to="/">Features</NavLink>
    </nav>

    </>
  )
}

export default NavBar