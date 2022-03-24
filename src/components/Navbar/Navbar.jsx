import React from 'react';
import "./Navbar.css";
import Logo from '../../assets/logos/navLogo.png'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
      <nav>
        <div className="nav_left">
        <Link to='/'> <img src={Logo} alt="logo" /></Link>
         <Link to='/' className='logo_text'>MyNamaz</Link>
        </div>
        <div className="nav_right">
          <Link className='link' to="/weather">Ob-havo</Link>
          <Link className='link' to="/tasbeh">Tasbeh</Link>
        </div>
      </nav>
  )
}

export default Navbar