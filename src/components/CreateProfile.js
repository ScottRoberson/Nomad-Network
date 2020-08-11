import React from 'react';
import ProfileImage from './ProfileImage';
import './CreateProfile.css';
const CreateProfile = () => {
  return (
    <div>
      <ProfileImage />
      <h1>Create Profile Page</h1>
      <p>Bio</p>
      <textarea
        placeholder='Tell us a little about yourself'
        name='bio'></textarea>

      <div className='form-group'>
        <p>Hobbies</p>
        <input type='hobbies' placeholder='Hobbies' />
      </div>
      <div className='form-group'>
        <p>Home base</p>
        <input type='home' placeholder='Home Base' />
      </div>
      <p>Ideal Travel Buddy</p>
      <textarea
        placeholder='Describe your ideal travel buddy'
        name='buddy'></textarea>

      <input type='submit' value='Submit' className='btn btn-primary' />
    </div>
  );
};

export default CreateProfile;
