import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const PostList = ({ posts }) => {
	return posts.map((post) => (
		<Post
			key={post.id}
			title={post.title}
			text={post.description}
			options={post.options}
			selected={post.selected}
			flag={post.flag}
		/>
	));
};

const Post = ({ title, text, options, selected, flag }) => {
	const actionHandler = (index) => {
		selected = index;
		console.log(index);
		setSelectedIndex(index);
	};

	const [selectedIndex, setSelectedIndex] = React.useState(selected);

	return (
		<Card sx={{ minWidth: 275, maxWidth: 480 }} className='mb-4 mx-auto'>
			<CardContent>
				<Typography className='pb-1' sx={{ fontSize: 16 }} color='text.primary'>
					{title}
				</Typography>
				<Typography className='pb-1' sx={{ fontSize: 14 }} color='text.secondary'>
					{text}
				</Typography>
				<PostAction flag={flag} selected={selectedIndex} actionHandler={actionHandler} />
			</CardContent>
		</Card>
	);
};

const PostAction = ({ flag, selected, actionHandler }) => {
	let data;
	switch (flag) {
		case 1:
			data = ['Interested', 'Not Interested'];
			break;
		case 2:
			data = ['Yes', 'No'];
			break;
		case 3:
			data = ['Agree', 'Disagree'];
			break;
		default:
			data = ['Helpful', 'Not Helpful'];
	}

	return (
		<div className='flex justify-between mt-3'>
			{data.map((o, k) => (
				<Button
					key={k}
					className={selected === k + 1 ? 'activeBtn' : ''}
					disabled={!!selected}
					onClick={() => actionHandler(k + 1)}>
					{o}
				</Button>
			))}
		</div>
	);
};

export { Post };
export default PostList;
