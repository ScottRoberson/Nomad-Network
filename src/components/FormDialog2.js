import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './PostCreation.css';
import AvatarPic from './AvatarPic';
import './PostCreation.css';
import PhotoIcon from '@material-ui/icons/Photo';

export default function FormDialog({ addPost, addPostImage }) {
  const [open, setOpen] = useState(false);
  const [postText, setPostText] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(postText);
    addPostImage(file);
    setPostText('');
    setFile(null);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //Allowed types of files
  const types = ['image/png', 'image/jpeg'];

  const imageHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select a image file (png or jpeg)');
    }
  };

  return (
    <div>
      <button onClick={handleClickOpen} className='post-btn'>
        What's on your mind?
      </button>

      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <AvatarPic />
        <DialogTitle id='form-dialog-title'>Create Post</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <textarea
              className='post-textarea'
              placeholder='What is on your mind?'
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </DialogContent>
          <PhotoIcon style={{ color: 'green' }} />
          <input type='file' onChange={imageHandler} />
          <div className='output'>{error && <div>{error}</div>}</div>
          <DialogActions>
            <button className='post-modal-btn'> Post</button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
