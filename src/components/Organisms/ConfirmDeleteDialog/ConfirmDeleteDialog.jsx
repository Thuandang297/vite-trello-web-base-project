import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material'

const ConfirmDeleteDialog = ({ open, onClose, onConfirm, title, description }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title || 'Confirm delete'}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description || 'Do you want to delete?'}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDeleteDialog
