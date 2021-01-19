import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions/postActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { blue } from '@material-ui/core/colors';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './PostDialogBox.css';

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

const PostActionDialog = ({ id, post }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    handleClose();
  };

  return (
    <div className='post-dialog-parent'>
      <Button onClick={handleClickOpen}>
        <MoreHorizIcon />
      </Button>
      <div className='plop'>
        <Dialog open={open} onClose={handleClose}>
          <List className={classes.list}>
            <ListItem
              className={classes.listItem}
              onClick={() => handleDelete(id)}>
              <Avatar className={classes.avatar}>
                <DeleteIcon />
              </Avatar>
              <ListItemText primary='Delete' />
            </ListItem>
            <ListItem className={classes.listItem}>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
              <ListItemText primary='Edit' />
            </ListItem>
          </List>
        </Dialog>
      </div>
    </div>
  );
};

export default PostActionDialog;
