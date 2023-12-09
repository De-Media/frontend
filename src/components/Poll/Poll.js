import {
	Card,
	CardContent,
	List,
	ListItemButton,
	Typography,
} from '@mui/material';
import React from 'react';

const PollList = ({ polls }) => {
	return polls.map((poll) => (
		<Poll
			key={poll.id}
			text={poll.description}
			options={poll.options}
			selected={poll.selected}
		/>
	));
};

export const Poll = ({ text, options, selected }) => {
	const [selectedIndex, setSelectedIndex] = React.useState(selected);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<Card sx={{ minWidth: 275, maxWidth: 480 }} className='mb-4 mx-auto'>
			<CardContent>
				<Typography className='pb-1' sx={{ fontSize: 16 }} color='text.primary'>
					{text}
				</Typography>
				<List aria-label='options'>
					{Object.entries(options)?.map((o) => (
						<>
							<ListItemButton
								key={o[0]}
								className='op-1'
								disabled={selectedIndex}
								selected={o[0] == selectedIndex}
								onClick={(event) => handleListItemClick(event, o[0])}>
								<Typography
									sx={{ fontSize: 14 }}
									color='text.secondary'
									className='flex-grow'>
									{o[1].label}
								</Typography>
								{selectedIndex ? (
									<Typography sx={{ fontSize: 14 }} color='text.secondary'>
										{o[1].count}%
									</Typography>
								) : null}
							</ListItemButton>
						</>
					))}
				</List>
			</CardContent>
		</Card>
	);
};

export default PollList;
