import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ModalAlert({
  openModalAlert,
  handleDiscardPost,
  handleModalAlertClose,
}) {
  return (
    <div>
      <Dialog
        open={openModalAlert}
        onClose={handleModalAlertClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{'Discard Post'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleModalAlertClose} color='primary'>
            Cancel
          </Button>
          <Button
            onClick={handleDiscardPost}
            style={{ backgroundColor: '#1877f2', color: '#fff' }}
            autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
