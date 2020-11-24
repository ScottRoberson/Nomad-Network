import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './PostComments.css';
const PostComments = () => {
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
        <div className='comment-text-container'>
          <p className='comment-text'>
            Letterpress plaid pok pok butcher meggings. Paleo celiac
            lumbersexual, forage PBR&B prism chartreuse pok pok yr iceland
            whatever organic. Migas selvage pork belly bitters hella. Before
            they sold out literally artisan activated charcoal sartorial chia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
