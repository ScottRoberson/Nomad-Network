import React from 'react';

const Login = () => {
  return (
    <div className='signup-container'>
      <h1 className='signup-heading'>Sign In</h1>
      <p className='signup-lead'>Login to your account</p>
      <form action='submit' className='signup-form'>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' minlength='6' />
        </div>
        <input type='submit' value='Submit' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default Login;
