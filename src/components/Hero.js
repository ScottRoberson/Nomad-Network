import React from 'react';
// import hero from './images/hero.jpg'
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
            <a href='#' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='#' className='btn btn'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
