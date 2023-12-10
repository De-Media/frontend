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
			const d = await getMedia({ mediaIndex: i });
			if (d) {
				const converted = convert(d);
				// setData([...data, converted]);
				_data.current.push(converted);
				getData(i + 1);
			} else {
				setData(_data.current);
			}
		} catch (err) {
			setData(_data.current);
		}
	};

	getData(1);

	const onClose = () => {
		_data.current = [];
		setData([]);
		getData(1);
	};

	return (
		<Layout>
			<Helmet>
				<title>DeMedia | Home</title>
			</Helmet>
			<List items={data} />
			<BasicSpeedDial onClose={onClose} />
		</Layout>
	);
};

export default HomePage;
