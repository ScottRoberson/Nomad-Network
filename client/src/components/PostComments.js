import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';

import './PostComments.css';
const PostComments = ({ comments }) => {
  return (
    <div className='post-comment-main-container'>
      <Avatar
        style={{ height: '32px', width: '32px' }}
        alt='Random'
        src='https://randomuser.me/api/portraits/men/81.jpg'
      />
      <div className='post-comments'>
        <div className='username-container'>
          <span className='username'> Peter Griffin </span>
        </div>
        {comments.map((comment) => {
          return (
            <div className='comment-text-container' key={comment._id}>
              <p className='comment-text'>{comment.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostComments;
