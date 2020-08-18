import React from 'react';

const CreatePost = () => {
  return (
    <div className='create-post-container'>
      <input
        type='text'
        className='create-post-input'
        placeholder="What's on your mind"
      />
    </div>
  );
};

export default CreatePost;
