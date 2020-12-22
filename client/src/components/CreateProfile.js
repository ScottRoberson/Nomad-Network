import React from 'react';
import ProfileImage from './ProfileImage';
import './CreateProfile.css';
const CreateProfile = () => {
  return (
    <div>
      <ProfileImage />
      <div className='create-profile-container'>
        <h1 className='create-profile-heading'>Create Your Profile</h1>

        <form action='submit' className='create-profile-form'>
          <div className='form-group-profile'>
            <p className='input-text-tags'>Bio</p>
            <textarea
              placeholder='Tell us a little about yourself'
              name='bio'></textarea>
          </div>
          <div className='form-group-profile'>
            <p className='input-text-tags'>Hobbies</p>
            <textarea
              placeholder='What are your hobbies?'
              name='hobbies'></textarea>
          </div>
          <div className='form-group-profile'>
            <p className='input-text-tags'>Home base</p>
            <input type='home' placeholder='Your Home Base' />
          </div>
          <div className='form-group-profile'>
            <p className='input-text-tags'>Ideal Travel Buddy</p>
            <textarea
              placeholder='Describe your ideal travel buddy'
              name='buddy'></textarea>
            <input
              type='submit'
              value='Submit'
              className='btn btn-primary'
              id='profile-submit-btn'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
