import React from 'react';
import Post from './Post';
import './Mainfeed.css';
const MainFeed = () => {
  return (
    <div className='main-feed-container'>
      <h2>Main Feed</h2>
      <Post />
    </div>
  );
};

export default MainFeed;
