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
  openModalAlert,
  handleDiscardPost,
  handleModalClose,
  handleModalAlertClose,
  postText,
  setPostText,
}) => {
  const postTextHandleChange = (e) => {
    setPostText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <input type='file' id='file' className='inputfile' />
            <label for='file'>
              <CameraAltIcon style={{ fontSize: '32px' }} />
            </label>
          </div>
          <div className='output'></div>
          <DialogActions>
            <button
              className={postText ? 'post-modal-btn' : 'disabled'}
              disabled={!postText}>
              Post
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default PostModal;
