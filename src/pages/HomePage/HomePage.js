
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from "../../components/Layout";
import Alert from "@mui/material/Alert";
import BasicSpeedDial from '../../components/BasicSpeedDial';

const HomePage = () => {
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
