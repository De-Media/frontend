import {
	Button,
	Divider,
	IconButton,
	List,
	ListItem,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { addMedia } from '../../utils/contractFunctions';

const PostForm = () => {
	const [question, setQuestion] = React.useState('');
	const [flag, setFlag] = React.useState();

	const onSubmit = async () => {
		const obj = {
			title: question,
			description: question,
			isPoll: true,
			polls: [],
			_pA: 0,
			_pB: 0,
			_pC: 0,
			_pubSignals: 0,
			flag: flag,
		};
		const res = await addMedia(obj);
		if (res) {
			onReset();
			console.log('response', res);
			console.log('Submit');
		}
	};

	const onReset = () => {
		setQuestion('');
		setFlag(0);
	};

	const isValid = () => {
		if (!question) return false;
		return true;
	};

	return (
		<>
			<h2 className='mb-3'>Create Post</h2>
			<TextField
				id='outlined-multiline-flexible'
				label='Ask a question...'
				className='mb-3'
				value={question}
				fullWidth
				onChange={(event) => {
					setQuestion(event.target.value);
				}}
				multiline
				rows={3}
			/>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				fullWidth
				value={flag}
				className='mb-3'
				onChange={(e) => setFlag(e.target.value)}>
				<MenuItem value={0}>Helpful - Not helpful</MenuItem>
				<MenuItem value={1}>Interested - Not interested</MenuItem>
				<MenuItem value={2}>Yes - No</MenuItem>
				<MenuItem value={3}>Agree - Disagree</MenuItem>
			</Select>

			<Divider className='mb-3' />
			<div>
				<Button type='reset' variant='outlined' onClick={onReset}>
					Reset
				</Button>
				&nbsp; &nbsp;
				<Button
					type='submit'
					className='mx-2'
					disabled={!isValid()}
					variant='contained'
					onClick={onSubmit}>
					Submit
				</Button>
			</div>
		</>
	);
};

export default PostForm;
