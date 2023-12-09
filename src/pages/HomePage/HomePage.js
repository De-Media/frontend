import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import BasicSpeedDial from '../../components/BasicSpeedDial';
import { DataContext } from '../../context/DataContext';
import List from '../../components/List';
import { convert, getMedia } from '../../utils/contractFunctions';

const HomePage = () => {
	// const data = useContext(DataContext);

	const _data = React.useRef([]);
	const [data, setData] = useState([]);

	const getData = async (i) => {
		try {
			console.log('calling getData ', i);
			const d = await getMedia({ mediaIndex: i });
			console.log('calling getData ', d);
			if (d) {
				const converted = convert(d);
				// setData([...data, converted]);
				_data.current.push(converted);
				getData(i + 1);
			} else {
				console.log('close');
				setData(_data.current);
			}
		} catch (err) {
			console.log(err);
			setData(_data.current);
		}
	};

	getData(1);

	return (
		<Layout>
			<Helmet>
				<title>DeMedia | Home</title>
			</Helmet>
			<List items={data} />
			<BasicSpeedDial />
		</Layout>
	);
};

export default HomePage;
