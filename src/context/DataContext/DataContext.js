/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { execute, GetQueryDocument } from '../../.graphclient';
import { convert, getMedia } from '../../utils/contractFunctions';

const DataContext = createContext();



const DataProvider = ({ children }) => {
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
				console.log('close');
				setData(_data.current);
			}
		} catch (err) {
			// console.log(err);
		}
	};

	useEffect(() => {
		getData(1);
	}, []);

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext };
export default DataProvider;
