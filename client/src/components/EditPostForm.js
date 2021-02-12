import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost } from '../redux/actions/postActions';
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

const useStyles = makeStyles({
  closeButton: {
    position: 'absolute',
    right: '-23px',
    top: '-20px',
    backgroundColor: '#e5e5e5',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
  },
  closeButtonHide: {
    display: 'none',
  },
});

const EditPostForm = ({ open, setOpen, id }) => {
  const [updatedText, setUpdatedText] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const editPost = useSelector((state) => state.post.postToEdit);
  const dispatch = useDispatch();
  const imageContainer = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {});

  const handleUpdateText = (e) => {
    setUpdatedText(e.target.value);
  };
  const handleUpdateImage = (e) => {
    setSelectedFile(e.target.files[0]);
    imageContainer.current.className = 'edit-image-container';
  };
  const handleEditClose = () => {
    setOpen(false);
  };

  const handleUpdatePost = (e, id) => {
    const data = new FormData();
    data.append('postText', updatedText);
    data.append('postImage', selectedFile);
    e.preventDefault();

    dispatch(updatePost(id, data));
  };

  const removeImage = () => {
    return (imageContainer.current.className = 'hide');
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
        <form onSubmit={(e) => handleUpdatePost(e, id)}>
          <DialogContent>
            <textarea
              className='post-textarea'
              defaultValue={editPost.postText}
              onChange={handleUpdateText}
            />
            {editPost.postImage || selectedFile ? (
              <div className='edit-image-container' ref={imageContainer}>
                <div className='plop'>
                  <IconButton
                    aria-label='close'
                    className={classes.closeButton}>
                    <CloseIcon onClick={removeImage} />
                  </IconButton>
                  <img
                    src={selectedFile ? preview : editPost.postImage}
                    className='edit-image'
                    onError={() => (imageContainer.current.className = 'hide')}
                  />
                </div>
              </div>
            ) : null}
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
