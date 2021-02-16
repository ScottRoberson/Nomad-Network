import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FeedProfile from './FeedProfile';
import './PostComments.css';
const PostComments = ({ comments }) => {
  const commentlist = comments.map((comment) => {
    return (
      <div className='post-comments'>
        <FeedProfile />
        <div className='comment-text-container' key={comment._id}>
          <p className='comment-text'>{comment.text}</p>
        </div>
      </div>
    );
  });

  return <div className='post-comment-main-container'>{commentlist}</div>;
};

export default PostComments;
