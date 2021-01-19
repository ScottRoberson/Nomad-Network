import React from 'react';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './PostDialogBox.css';

function PostDialogBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div className='post-dialog-parent'>
      <Button onClick={handleClickOpen}>
        <MoreHorizIcon />
      </Button>

      <div className='dialog-alert-parent'>
        <Dialog open={open} fullWidth={true}>
          <List onClick={handleClickClose}>
            <ListItem>one </ListItem>
            <ListItem>two</ListItem>
          </List>
        </Dialog>
      </div>
    </div>
  );
}

export default PostDialogBox;
