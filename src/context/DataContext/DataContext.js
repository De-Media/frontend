/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useRef, useState } from 'react';

const DataContext = createContext();
const getData = async (data) => {
	const res = await fetch('/');
	console.log('data', data.current);
	const resJson = await res.json();
	data.current.push(resJson);
	await getData(data);
};

const DataProvider = ({ children }) => {
	const data = useRef([]);

	// getData(data);

	return <DataContext.Provider value={data.current}>{children}</DataContext.Provider>;
};

export { DataContext };
export default DataProvider;
