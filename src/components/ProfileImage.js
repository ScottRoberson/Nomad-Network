import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './ProfileImage.css';
import profile from '../images/image-test.jpg';
import cover from '../images/wrigley-field.jpg';

const ProfileImage = () => {
  return (
    <div className='main-wrapper'>
      <div className='profile-image-main-container'>
        <div className='cover-image-container'>
          <img src={cover} alt='coverphoto' className='cover-image' />
          <div className='cover-image__upload-container'>
            <label className='cover-image__upload profile-label'>
              <input type='file' />
              <FontAwesomeIcon className='icon' icon={faCamera} />
              <small>Upload Cover Photo</small>
            </label>
          </div>
        </div>
        <div className='profile-image-container'>
          <div className='profile-image__upload-container'>
            <label className='profile-label'>
              <input type='file' />
              <FontAwesomeIcon
                className='icon'
                id='profile-pic-icon'
                icon={faCamera}
              />
            </label>
          </div>
          <div>
            <img
              src={profile}
              alt='profile-pic'
              className='profile-image'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
