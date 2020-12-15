import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import './WriteComment.css';

const WriteComment = () => {
  return (
    <div className='write-comment-main-container'>
      <Avatar
        style={{ height: '32px', width: '32px' }}
        alt='Random'
        src='https://randomuser.me/api/portraits/men/81.jpg'
      />
      <form className='write-comment-form'>
        <div className='write-comment-input-container'>
          <input
            type='text'
            className='comment-input'
            placeholder='Write a comment..'
          />
        </div>
        <div className='image-upload-container'>
          <input type='file' name='file' id='file' className='inputfile' />
          <label for='file'>
            <FontAwesomeIcon
              icon={faCamera}
              style={{ fontSize: '24px', color: '#385898' }}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default WriteComment;
