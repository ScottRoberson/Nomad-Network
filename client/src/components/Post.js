import React from 'react';
import './Post.css';
import w from '../images/wrigley-field.jpg';
import FeedProfile from './FeedProfile';
import CommentBox from './CommentBox';

function Post({ posts }) {
  const postslist = posts.map((post) => {
    return (
      <div className='post'>
        <p>{post.postText}</p>
        <img src={post.postImage} alt='user upload' className='post-image' />
      </div>
    );
  });

  return (
    <div className='post-parent'>
      <FeedProfile />
      <div className='post__container'>
        {postslist}
        <CommentBox />
      </div>
    </div>
  );
}

export default Post;
