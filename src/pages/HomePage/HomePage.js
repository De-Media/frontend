import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import BasicSpeedDial from '../../components/BasicSpeedDial';
import { DataContext } from '../../context/DataContext';
import List from '../../components/List';

const HomePage = () => {
	const data = useContext(DataContext);

	const items = [
		{
			id: 1,
			description: 'What do you like most?',
			isPoll: true,
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
			isPoll: true,
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
			id: 1,
			title: 'my title 1',
			description: 'What do you like most?',
			flag: 1,
			selected: 0,
		},
		{
			id: 2,
			title: 'my title 2',
			description: 'What do you like most?',
			flag: 2,
			selected: 2,
		},
	];

	return (
		<Layout>
			<Helmet>
				<title>DeMedia | Home</title>
			</Helmet>
			<List items={items} />
			<BasicSpeedDial />
		</Layout>
	);
};

export default HomePage;
