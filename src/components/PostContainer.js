import React from 'react';
import './Mainfeed.css';
import Post from './Post';
import Post2 from './Post2';

const PostContainer = () => {
  return (
    <div className='post__main-container'>
      <Post />
      <Post2 />
    </div>
  );
};

export default PostContainer;
