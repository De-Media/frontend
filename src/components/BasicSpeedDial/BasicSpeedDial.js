import React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BallotIcon from '@mui/icons-material/Ballot';
import { useNavigate } from 'react-router-dom';

const actions = [
	{ icon: <BallotIcon />, name: 'Poll', to: '/createPoll' },
	{ icon: <NewspaperIcon />, name: 'Post', to: '/polls' },
];

const BasicSpeedDial = () => {
	const navigate = useNavigate();

	return (
		<SpeedDial
			ariaLabel='SpeedDial'
			sx={{ position: 'absolute', bottom: 30, right: 30 }}
			icon={<SpeedDialIcon />}>
			{actions.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					tooltipOpen
					onClick={() => navigate(action.to)}
				/>
			))}
		</SpeedDial>
	);
};

export default BasicSpeedDial;
