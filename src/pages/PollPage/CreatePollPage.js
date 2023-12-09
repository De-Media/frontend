import { TextField } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout';

const CreatePollPage = () => {
	return (
		<Layout>
			<h2 className='mb-3'>Create Poll</h2>
			<TextField
				id='outlined-multiline-flexible'
				label='Ask a question...'
				fullWidth
				multiline
				rows={4}
			/>
		</Layout>
	);
};

export default CreatePollPage;
