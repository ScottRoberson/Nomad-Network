import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import './Post.css';
import WriteComment from './WriteComment';
import PostComments from './PostComments';

const CommentBox = ({ postId, comments }) => {
  return (
    <div className='comment-container'>
      <div className='like-comment-count-container'>
        <div className='likes'>
          <span>2 Likes</span>
        </div>
        <div className='comments'>
          <span>
            <a href='#' className='comment-link'>
              <span>
                <span> 1 Comment</span>
              </span>
            </a>
          </span>
        </div>
      </div>
      <div className='like-comment-icon-container'>
        <div className='like-box box'>
          <div className='like-icon icon'>
            <FontAwesomeIcon icon={faThumbsUp} />
            <p className='icon-description'>Like</p>
          </div>
        </div>
        <div className='comment-box box'>
          <div className='comment-icon icon'>
            <FontAwesomeIcon icon={faCommentAlt} style={{ fontSize: '24px' }} />
            <p className='icon-description'>Comment</p>
          </div>
        </div>
      </div>
      {/* Write Comment & Post Comments below */}
      <WriteComment postId={postId} />
      <PostComments comments={comments} postId={postId} />
    </div>
  );
};

export default CommentBox;
