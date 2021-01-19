import React from 'react';
import {} from 'react-redux';
import './Post.css';
import FeedProfile from './FeedProfile';
import CommentBox from './CommentBox';
import PostActionDialog from './PostActionDialog';

function Post({ posts }) {
  const postslist = posts.map((post) => {
    return (
      <div className='post-wrapper'>
        <FeedProfile />
        <div className='post__container'>
          <div className='action-icons'>
            <PostActionDialog id={post._id} post={post} />
          </div>
          <div className='post'>
            <p>{post.postText}</p>
            <div className='post-image-container'>
              <img className='post-image' src={post.postImage} alt='' />
            </div>
          </div>
          <CommentBox />
        </div>
      </div>
    );
  });

  return <div className='post-parent'>{postslist}</div>;
}

export default Post;
