import React from 'react';
import Layout from '../../components/Layout';
import PollForm from '../../form/PollForm/PollForm';

const CreatePollPage = () => {
	return (
		<Layout>
			<h2 className='mb-3'>Create Poll</h2>
			<PollForm />
		</Layout>
	);
};

export default CreatePollPage;
