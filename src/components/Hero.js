import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
const Hero = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='header-landing'>Nomad Network</h1>
          <p className='lead'>
            Connect with fellow world travelers and find new places to explore.
            Your next adventure begins now!
          </p>
          <div className='buttons'>
            <Link className='btn btn-primary' to='/signup'>
              Signup
            </Link>
            <Link className='btn btn' to='/login'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
