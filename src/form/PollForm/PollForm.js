import { Button, Divider, IconButton, List, ListItem, TextField, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { addMedia } from '../../utils/contractFunctions';

const PollForm = () => {
	const [question, setQuestion] = React.useState('');
	const [options, setOptions] = React.useState([]);
	const [option, setOption] = React.useState('');

	const addOption = (e) => {
		if (option) {
			const arr = [...options, option];
			setOptions(arr);
			setOption('');
		}
	};

	const deleteOption = (index) => {
		if (index) {
			const arr = [...options];
			arr.splice(index, 1);
			setOptions(arr);
		}
	};

	const onSubmit = async () => {
		const obj = {
			title: question,
			description: question,
			isPoll: true,
			polls: options,
			_pA: 0,
			_pB: 0,
			_pC: 0,
			_pubSignals: 0,
			flag: 0,
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
		setOptions([]);
		setOption('');
	};

	const isValid = () => {
		if (!question) return false;
		if (!options || options.length < 2) return false;
		return true;
	};

	return (
		<>
			<h2 className='mb-3'>Create Poll</h2>
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
			{options && options.length ? (
				<List aria-label='options' className='border mb-3'>
					{options?.map((o, k) => (
						<ListItem
							key={k}
							className='op-1'
							secondaryAction={
								<IconButton
									edge='end'
									aria-label='delete'
									onClick={() => deleteOption(k)}>
									<CloseIcon sx={{ fontSize: 14 }} />
								</IconButton>
							}>
							<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								className='flex-grow'>
								{o}
							</Typography>
						</ListItem>
					))}
				</List>
			) : null}

			<TextField
				id='outlined-multiline-flexible'
				className='mb-3'
				label='Option'
				value={option}
				fullWidth
				placeholder='Write your option'
				onChange={(event) => {
					setOption(event.target.value);
				}}
				onKeyUp={(e) => (e.keyCode === 13 ? addOption(e) : null)}
			/>
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

export default PollForm;
