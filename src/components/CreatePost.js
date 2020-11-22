import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import lucky from '../images/Lucky.jpg';

const CreatePost = () => {
  return (
    <div className='create-post-container'>
      <div className='create-post__inner-container'>
        <Avatar alt='lucky Sob' src={lucky} />
        <button className='create-post-button'>
          Where in the world are you today?
        </button>
      </div>
      <hr className='divider'></hr>
    </div>
  );
};

export default CreatePost;
