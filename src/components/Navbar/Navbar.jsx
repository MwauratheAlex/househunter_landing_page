import React from 'react'
import "../../styles/navbar.css"
import logo from "../../assets/logo.png"

export default function Navbar() {
  return (
    <nav className='container'>
      <img src={logo} alt='house hunter logo' />
      <ul>
        <li>Home</li>
        <li>How it works</li>
        <li>Featured Properties</li>
        <li>Newsletter</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}
