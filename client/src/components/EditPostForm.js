import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost } from '../redux/actions/postActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './EditPostForm.css';
import ModalAlert from './ModalAlert';

const EditPostForm = ({ open, setOpen, id }) => {
  const [updatedText, setUpdatedText] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const editPost = useSelector((state) => state.post.postToEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleUpdateText = (e) => {
    setUpdatedText(e.target.value);
  };
  const handleUpdateImage = (e) => {
    setSelectedFile(e.target.files[0]);
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
    console.log(selectedFile, id);
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
            <div className='edit-image-container'>
              {selectedFile && <img src={preview} className='edit-image' />}
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
