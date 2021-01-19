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

class PostModal extends Component {
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

  handleModalAlertOpen = () => {
    this.props.setOpenModalAlert(true);
  };

  handleModalAlertClose = () => {
    this.props.setOpenModalAlert(false);
  };

  handleModalClose = () => {
    if (this.state.postText) {
      this.handleModalAlertOpen();
    } else {
      this.props.setOpen(false);
    }
  };

  handleDiscardPost = () => {
    this.props.setOpen(false);
    this.setState({ postText: '' });
    this.handleModalAlertClose();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('postText', this.state.postText);
    data.append('postImage', this.state.postImage);
    this.props.addPost(data);
    this.props.setOpen(false);
    this.setState({ postText: '', postImage: null });
  };

  render() {
    return (
      <div>
        <Dialog open={this.props.open} aria-labelledby='form-dialog-title'>
          <IconButton
            aria-label='close'
            style={{ position: 'absolute', right: '0' }}>
            <CloseIcon onClick={this.handleModalClose} />
            <ModalAlert
              openModalAlert={this.props.openModalAlert}
              handleModalAlertClose={this.handleModalAlertClose}
              handleDiscardPost={this.handleDiscardPost}
              handleModalClose={this.handleModalClose}
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
                  this.state.postText || this.state.postImage
                    ? 'post-modal-btn'
                    : 'disabled'
                }>
                Post
              </button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default connect(null, { addPost })(PostModal);
