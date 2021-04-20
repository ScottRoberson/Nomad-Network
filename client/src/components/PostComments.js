import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../redux/actions/postActions';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import FeedProfile from './FeedProfile';
import './PostComments.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialog: {
    position: 'absolute',
    top: 205,
  },
  list: {
    width: 475,
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#e5e5e5 !important',
    },
  },
});

const PostComments = ({ comments, postId }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = (postId, commentId) => {
    dispatch(deleteComment(postId, commentId));
    setOpen(false);
    console.log(postId, commentId);
  };
  const commentlist = comments.map((comment) => {
    return (
      <div className='post-comments'>
        <div className='more-container'>
          <Button onClick={handleClickOpen}>
            <MoreHorizIcon />
          </Button>
          <Dialog open={open}>
            <List className={classes.list}>
              <ListItem
                className={classes.listItem}
                onClick={() => handleDelete(postId, comment._id)}>
                <Avatar className={classes.avatar}>
                  <DeleteIcon />
                </Avatar>
                <ListItemText primary='Delete' />
              </ListItem>
            </List>
          </Dialog>
        </div>
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
