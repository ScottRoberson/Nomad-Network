import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import lucky from '../images/Lucky.jpg';
import PostModal from './PostModal';

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [openModalAlert, setOpenModalAlert] = useState(false);
  const [postText, setPostText] = useState('');
  const handleModalAlertOpen = () => {
    setOpenModalAlert(true);
  };

  const handleModalAlertClose = () => {
    setOpenModalAlert(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    if (postText) {
      handleModalAlertOpen();
    } else {
      setOpen(false);
    }
  };

  const handleDiscardPost = () => {
    setOpen(false);
    setPostText('');
    handleModalAlertClose();
  };

  return (
    <div className='create-post-container'>
      <div className='create-post__inner-container'>
        <Avatar alt='lucky Sob' src={lucky} />
        <button className='create-post-button' onClick={handleModalOpen}>
          Where in the world are you today?
        </button>
      </div>
      <PostModal
        open={open}
        postText={postText}
        setPostText={setPostText}
        openModalAlert={openModalAlert}
        handleModalClose={handleModalClose}
        handleDiscardPost={handleDiscardPost}
        handleModalAlertClose={handleModalAlertClose}
      />

      <hr className='divider'></hr>
    </div>
  );
};

export default CreatePost;
