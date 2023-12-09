import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import BasicSpeedDial from '../../components/BasicSpeedDial';
import { DataContext } from '../../context/DataContext';

const HomePage = () => {
	const data = useContext(DataContext);

	return (
		<Layout>
			<Helmet>
				<title>DeMedia | Home</title>
			</Helmet>
			<h1>HomePage</h1>
			<BasicSpeedDial />
		</Layout>
	);
};

export default HomePage;
