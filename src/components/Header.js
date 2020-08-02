import React from 'react';
import logo from '../images/logo.jpg';
import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img src={logo} alt='Logo' className='log' />
      </div>
      <div className='heading-container'>
        <h1 className='heading'>Nomad Network</h1>
      </div>
      <nav className='links-container'>
        <ul>
          <li className='links'>
            <a href=''>Nomads</a>
            <a href=''>Register</a>
            <a href=''>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
