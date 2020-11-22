import React from 'react';
import './Mainfeed.css';
import lucky from '../images/Lucky.jpg';

const FeedProfile = () => {
  return (
    <div className='test-name'>
      <div className='postImg__postComponent'>
        <img src={lucky} alt='lucky Sob' />
      </div>
      <div className='name'>
        <p className='post__name'>Peter Griffin</p>
      </div>
    </div>
  );
};

export default FeedProfile;
