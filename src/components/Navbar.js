import React from 'react';
import logo from '../images/logo.jpg';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img src={logo} alt='Logo' className='log' />
      </div>
      <div className='heading-container'>
        <h1 className='heading'>Nomad Network</h1>
      </div>
      <nav className='links-container'>
        <ul className='link'>
          <li className='links'>
            <Link to='/'>Home </Link>
          </li>
          <li className='links'>
            <Link to='/signup'>Register </Link>
          </li>
          <li className='links'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
