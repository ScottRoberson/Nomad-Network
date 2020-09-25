import React from 'react';
import './Mainfeed.css';
import w from '../images/flytheW.jpg';

function Post() {
  return (
    <div>
      <div className='post'>
        <p>This is some interesting stuff</p>
        <img src={w} alt='' className='post-image' />
      </div>
    </div>
  );
}

export default Post;
