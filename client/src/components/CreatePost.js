import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import lucky from '../images/Lucky.jpg';
import PostModal from './PostModal';
import PostModalC from './PostModalC';

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [openModalAlert, setOpenModalAlert] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  return (
    <div className='create-post-container'>
      <div className='create-post__inner-container'>
        <Avatar alt='lucky Sob' src={lucky} />
        <button className='create-post-button' onClick={handleModalOpen}>
          Where in the world are you today?
        </button>
      </div>
      <PostModalC
        open={open}
        setOpen={setOpen}
        openModalAlert={openModalAlert}
        setOpenModalAlert={setOpenModalAlert}
      />

      <hr className='divider'></hr>
    </div>
  );
};

export default CreatePost;
