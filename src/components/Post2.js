import React from 'react';
import './Mainfeed.css';
import w from '../images/flytheW.jpg';
import FeedProfile from './FeedProfile';

function Post2() {
  return (
    <div className='post-parent'>
      <FeedProfile />
      <div className='post__container'>
        <div className='post'>
          <p>This is some interesting stuff</p>
        </div>
      </div>
    </div>
  );
}

export default Post2;
