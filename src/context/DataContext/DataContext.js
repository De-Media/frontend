/* eslint-disable no-unused-vars */
import React, { createContext, useEffect } from 'react';
import { execute, GetQueryDocument } from '../../.graphclient';
const DataContext = createContext();
const getData = async (data) => {
	const res = await fetch('/');
	console.log('data', data);
	const resJson = await res.json();
	data.current.push(resJson);
	await getData(data);
};

const DataProvider = ({ children }) => {
	const [data, setData] = React.useState();
	// getData(data);

	useEffect(() => {
		execute(GetQueryDocument, {}).then((result) => {
			console.log('resp[onse', result?.data);
			setData(result?.data);
		});
	}, [setData]);
	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext };
export default DataProvider;
