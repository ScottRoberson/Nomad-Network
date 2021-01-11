import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './PostModal.css';
import ModalAlert from './ModalAlert';

const PostModal = ({
  open,
  setOpen,
  setOpenModalAlert,
  openModalAlert,
  handleDiscardPost,
  handleModalClose,
  handleModalAlertClose,
  //loacal state
  postText,
  setPostText,
  postImage,
  setPostImage,
}) => {
  const postTextHandleChange = (e) => {
    setPostText(e.target.value);
  };

  const imageHandleChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('postText', postText);
    data.append('postImage', postImage);

    fetch('/api/posts', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setPostText('');
    setPostImage(null);
    setOpenModalAlert(false);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} aria-labelledby='form-dialog-title'>
        <IconButton
          aria-label='close'
          style={{ position: 'absolute', right: '0' }}>
          <CloseIcon onClick={handleModalClose} />
          <ModalAlert
            openModalAlert={openModalAlert}
            handleModalAlertClose={handleModalAlertClose}
            handleDiscardPost={handleDiscardPost}
            handleModalClose={handleModalClose}
          />
        </IconButton>

        <DialogTitle id='form-dialog-title'>Create Post</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <textarea
              className='post-textarea'
              placeholder='What is on your mind?'
              value={postText}
              onChange={postTextHandleChange}
            />
          </DialogContent>
          <div className='modal-upload-container'>
            <input
              type='file'
              name='postImage'
              id='postImage'
              className='inputfile'
              onChange={imageHandleChange}
            />
            <label for='postImage'>
              <CameraAltIcon style={{ fontSize: '32px' }} />
            </label>
          </div>
          <div className='output'></div>
          <DialogActions>
            <button
              className={postText || postImage ? 'post-modal-btn' : 'disabled'}
              disabled={!postText || !postImage}>
              Post
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default PostModal;
