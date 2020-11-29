import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import lucky from '../images/Lucky.jpg';
import PostModal from './PostModal';

const CreatePost = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='create-post-container'>
      <div className='create-post__inner-container'>
        <Avatar alt='lucky Sob' src={lucky} />
        <button className='create-post-button' onClick={handleClickOpen}>
          Where in the world are you today?
        </button>
      </div>
      <PostModal open={open} handleClose={handleClose} />

      <hr className='divider'></hr>
    </div>
  );
};

export default CreatePost;
