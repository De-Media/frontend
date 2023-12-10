/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { execute, GetQueryDocument } from '../../.graphclient';
import { convert, getMedia } from '../../utils/contractFunctions';

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);
	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext };
export default DataProvider;
