import React from 'react';
import lucky from '../images/Lucky.jpg';
const CreatePost = () => {
  return (
    <div className='create-post-container'>
      <div className='create-post__inner-container'>
        <div className='profileImg__postContainer'>
          <img src={lucky} alt='lucky Sob' />
        </div>
        <button className='create-post-button'>
          Where in the world are you today?
        </button>
      </div>
      <hr className='divider'></hr>
    </div>
  );
};

export default CreatePost;
