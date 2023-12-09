import React from 'react';
import Layout from '../../components/Layout';
import PollList from '../../components/Poll/Poll';

const PollPage = () => {
	const polls = [
		{
			id: 1,
			description: 'What do you like most?',
			options: {
				1: {
					id: 1,
					label: 'Mountain',
					value: 'Mountain',
					count: 30,
				},
				2: {
					id: 2,
					label: 'River',
					value: 'River',
					count: 20,
				},
			},
			selected: 0,
		},
		{
			id: 2,
			description: 'What do you like most?',
			options: {
				1: {
					id: 1,
					label: 'Mountain',
					value: 'Mountain',
					count: 45,
				},
				2: {
					id: 2,
					label: 'River',
					value: 'River',
					count: 20,
				},
			},
			selected: 2,
		},
		{
			id: 2,
			description: 'What do you like most?',
			options: {
				1: {
					id: 1,
					label: 'Mountain',
					value: 'Mountain',
					count: 45,
				},
				2: {
					id: 2,
					label: 'River',
					value: 'River',
					count: 20,
				},
			},
			selected: 2,
		},
		{
			id: 2,
			description: 'What do you like most?',
			options: {
				1: {
					id: 1,
					label: 'Mountain',
					value: 'Mountain',
					count: 45,
				},
				2: {
					id: 2,
					label: 'River',
					value: 'River',
					count: 20,
				},
			},
			selected: 2,
		},
		{
			id: 2,
			description: 'What do you like most?',
			options: {
				1: {
					id: 1,
					label: 'Mountain',
					value: 'Mountain',
					count: 45,
				},
				2: {
					id: 2,
					label: 'River',
					value: 'River',
					count: 20,
				},
			},
			selected: 2,
		},
	];

	return (
		<Layout>
			<PollList polls={polls} />
		</Layout>
	);
};

export default PollPage;
