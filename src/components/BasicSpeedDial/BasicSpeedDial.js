import React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BallotIcon from '@mui/icons-material/Ballot';
import { useNavigate } from 'react-router-dom';
import PollForm from '../../form/PollForm/PollForm';
import Modal from '../Modal';
import PostForm from '../../form/PostForm';

const BasicSpeedDial = ({ onClose }) => {
	const navigate = useNavigate();
	const [openPoll, setOpenPoll] = React.useState(false);
	const [openPost, setOpenPost] = React.useState(false);

	const handleClose = () => {
		setOpenPoll(false);
		setOpenPost(false);
		if (onClose) onClose();
	};

	return (
		<>
			<SpeedDial
				ariaLabel='SpeedDial'
				sx={{ position: 'fixed', bottom: 30, right: 30 }}
				icon={<SpeedDialIcon />}>
				<SpeedDialAction
					icon={<BallotIcon />}
					tooltipTitle='Poll'
					tooltipOpen
					onClick={() => setOpenPoll(true)}
				/>
				<SpeedDialAction
					icon={<NewspaperIcon />}
					tooltipTitle='Post'
					tooltipOpen
					onClick={() => setOpenPost(true)}
				/>
			</SpeedDial>
			<Modal title='Create Poll' open={openPoll} handleClose={handleClose}>
				<PollForm />
			</Modal>
			<Modal title='Create Post' open={openPost} handleClose={handleClose}>
				<PostForm />
			</Modal>
		</>
	);
};

export default BasicSpeedDial;
