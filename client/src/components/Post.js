import React from 'react';
import './Post.css';
import FeedProfile from './FeedProfile';
import CommentBox from './CommentBox';

function Post({ posts }) {
  const postslist = posts.map((post) => {
    return (
      <div>
        <FeedProfile />
        <div className='post__container'>
          <div className='post'>
            <p>{post.postText}</p>
            <div className={post.postImage ? 'post-image' : 'post-image-none'}>
              <img src={post.postImage} alt='' />
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
