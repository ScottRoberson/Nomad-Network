import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './EditPostForm.css';
import ModalAlert from './ModalAlert';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%)',
  },
}));

const EditPostForm = ({ open, setOpen }) => {
  const [updatedText, setUpdatedText] = useState('');
  const [updatedImage, setUpdatedImage] = useState(null);
  const classes = useStyles();
  const editPost = useSelector((state) => state.post.postToEdit);

  const handleUpdateText = (e) => {
    setUpdatedText(e.target.value);
  };
  const handleUpdateImage = (e) => {
    setUpdatedImage(e.target.files[0]);
  };
  const handleEditClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} aria-labelledby='form-dialog-title'>
        <IconButton
          aria-label='close'
          style={{ position: 'absolute', right: '0' }}>
          <CloseIcon onClick={handleEditClose} />
        </IconButton>

        <DialogTitle id='form-dialog-title'>Edit Post</DialogTitle>
        <form>
          <DialogContent>
            <textarea
              className='post-textarea'
              defaultValue={editPost.postText}
              onChange={handleUpdateText}
            />
            <div className='edit-image-container'>
              <img src={editPost.postImage} className='edit-image' />
            </div>
          </DialogContent>
          <div className='modal-upload-container'>
            <input
              type='file'
              name='postImage'
              id='postImage'
              className='inputfile'
              onChange={handleUpdateImage}
            />
            <label for='postImage'>
              <CameraAltIcon style={{ fontSize: '32px' }} />
            </label>
          </div>
          <div className='output'></div>
          <DialogActions>
            <button className='post-modal-btn'>Update Post</button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default EditPostForm;
