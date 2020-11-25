import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PhotoIcon from '@material-ui/icons/Photo';
import './CreatePost.css';

const PostModal = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog open={open} aria-labelledby='form-dialog-title'>
        <IconButton
          aria-label='close'
          style={{ position: 'absolute', right: '0' }}
          onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle id='form-dialog-title'>Create Post</DialogTitle>
        <form>
          <DialogContent>
            <textarea
              className='post-textarea'
              placeholder='What is on your mind?'
            />
          </DialogContent>
          <PhotoIcon style={{ color: 'green' }} />
          <input type='file' />
          <div className='output'></div>
          <DialogActions>
            <button className='post-modal-btn'> Post</button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default PostModal;
