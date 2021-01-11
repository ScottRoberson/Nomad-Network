import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions/postActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ModalAlert from './ModalAlert';
import './PostModal.css';

class PostModalC extends Component {
  state = {
    postText: '',
    postImage: null,
  };

  postTextHandleChange = (e) => {
    this.setState({
      postText: e.target.value,
    });
  };

  imageHandleChange = (e) => {
    this.setState({
      postImage: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('postText', this.state.postText);
    data.append('postImage', this.state.postImage);

    this.props.addPostItem(data);
  };

  render() {
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
          <form onSubmit={this.handleSubmit}>
            <DialogContent>
              <textarea
                className='post-textarea'
                placeholder='What is on your mind?'
                value={this.state.postText}
                onChange={this.postTextHandleChange}
              />
            </DialogContent>
            <div className='modal-upload-container'>
              <input
                type='file'
                name='postImage'
                id='postImage'
                className='inputfile'
                onChange={this.imageHandleChange}
              />
              <label for='postImage'>
                <CameraAltIcon style={{ fontSize: '32px' }} />
              </label>
            </div>
            <div className='output'></div>
            <DialogActions>
              <button
                className={
                  postText || postImage ? 'post-modal-btn' : 'disabled'
                }
                disabled={!postText || !postImage}>
                Post
              </button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  addPostItem: (post) => dispatch(addPost());
};

export default connect(null, mapDispatchToProps)(PostModalC);
