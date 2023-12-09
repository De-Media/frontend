import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ title, open, handleClose, children }) => {
	return (
		<Dialog
			fullWidth
			maxWidth={'md'}
			onClose={handleClose}
			aria-labelledby='customized-dialog-title'
			open={open}>
			<DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
				{title}
			</DialogTitle>
			<IconButton
				aria-label='close'
				onClick={handleClose}
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}>
				<CloseIcon />
			</IconButton>
			<DialogContent dividers>{children}</DialogContent>
		</Dialog>
	);
};

export default Modal;
