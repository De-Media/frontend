import React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BallotIcon from '@mui/icons-material/Ballot';
import { useNavigate } from 'react-router-dom';
import PollForm from '../../form/PollForm/PollForm';
import Modal from '../Modal';

const BasicSpeedDial = () => {
	const navigate = useNavigate();
	const [openPoll, setOpenPoll] = React.useState(false);

	const handleClose = () => {
		setOpenPoll(false);
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
					onClick={() => setOpenPoll(true)}
				/>
			</SpeedDial>
			<Modal title='Create Poll' open={openPoll} handleClose={handleClose}>
				<PollForm />
			</Modal>
		</>
	);
};

export default BasicSpeedDial;
