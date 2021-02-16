import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions/postActions';
import Avatar from '@material-ui/core/Avatar';
import './WriteComment.css';

const WriteComment = ({ postId }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const commentChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const commentSubmit = (e, postId) => {
    e.preventDefault();
    console.log('Submit comment', comment);
    dispatch(addComment(postId, comment));
  };

  return (
    <div className='write-comment-main-container'>
      <Avatar
        style={{ height: '32px', width: '32px' }}
        alt='Random'
        src='https://randomuser.me/api/portraits/men/81.jpg'
      />
      <div className='write-comment-input-container'>
        <form
          className='write-comment-form'
          onSubmit={(e) => commentSubmit(e, postId)}>
          <input
            type='text'
            className='comment-input'
            placeholder='Write a comment..'
            onChange={commentChangeHandler}
          />
          <button className='add-comment-btn'>Add</button>
        </form>
      </div>
    </div>
  );
};

export default WriteComment;
