import React from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ModalAlert from './ModalAlert';

const EditPostForm = ({ open }) => {
  const editPost = useSelector((state) => state.post.postToEdit);

  return (
    <div>
      <Dialog open={open} aria-labelledby='form-dialog-title'>
        <IconButton
          aria-label='close'
          style={{ position: 'absolute', right: '0' }}>
          <CloseIcon />
        </IconButton>

        <DialogTitle id='form-dialog-title'>Edit Post</DialogTitle>
        <form>
          <DialogContent>
            <textarea
              className='post-textarea'
              defaultValue={editPost.postText}
            />
          </DialogContent>
          <div className='modal-upload-container'>
            <input
              type='file'
              name='postImage'
              id='postImage'
              className='inputfile'
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

// const mapStateToProps = (state) => {
//   editPost: state.post.postToEdit;
// };

export default EditPostForm;
