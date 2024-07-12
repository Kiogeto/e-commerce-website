import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>mKoLOni</p>
        </div>
        <ul className="nav-menu">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>

        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="" />
        </div>
    </div>
  )
}

export default Navbar
