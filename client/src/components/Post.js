import React from 'react';
import './Post.css';
import w from '../images/wrigley-field.jpg';
import FeedProfile from './FeedProfile';
import CommentBox from './CommentBox';

function Post() {
  return (
    <div className='post-parent'>
      <FeedProfile />
      <div className='post__container'>
        <div className='post'>
          <p>
            I'm baby occupy flexitarian biodiesel la croix butcher fanny pack,
            neutra before they sold out lumbersexual. Snackwave activated
            charcoal semiotics enamel pin jean shorts coloring book. Vice
            taiyaki skateboard flannel. Lomo vexillologist mixtape tattooed
            meditation. Franzen meditation neutra, shabby chic hot chicken
            hammock hoodie jianbing vice salvia occupy next level. Selvage
            raclette succulents literally.
          </p>
          <img src={w} alt='' className='post-image' />
        </div>
        <CommentBox />
      </div>
    </div>
  );
}

export default Post;
