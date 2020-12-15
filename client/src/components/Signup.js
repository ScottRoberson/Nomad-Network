import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className='signup-container'>
      <h1 className='signup-heading'>Sign Up</h1>
      <p className='signup-lead'>Create Your Account</p>
      <form action='submit' className='signup-form'>
        <div className='form-group'>
          <input type='text' required placeholder='Name' />
        </div>
        <div className='form-group'>
          <input type='email' required placeholder='Email Address' />
        </div>
        <div className='form-group'>
          <input
            type='password'
            required
            placeholder='Password'
            minlength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            required
            placeholder='Confirm password'
            minlength='6'
          />
        </div>

        <input type='submit' value='Submit' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default Signup;
