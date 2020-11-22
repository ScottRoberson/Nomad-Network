import React from 'react';
import './Mainfeed.css';
import Avatar from '@material-ui/core/Avatar';
import lucky from '../images/Lucky.jpg';

const FeedProfile = () => {
  return (
    <div className='test-name'>
      <Avatar alt='lucky Sob' src={lucky} />
      <div className='name'>
        <p className='post__name'>Peter Griffin</p>
      </div>
    </div>
  );
};

export default FeedProfile;
