import React from 'react';
import CreatePost from './CreatePost';
import MainFeed from './MainFeed';
import './ProfileHome.css';
import Sidebar from './Sidebar';
const ProfileHome = () => {
  return (
    <div className='profile-main'>
      <Sidebar />
      <div className='main'>
        <div className='inner-wrapper__mainprofile'>
          <CreatePost />
          <MainFeed />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default ProfileHome;
