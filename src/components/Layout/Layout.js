import React from 'react';
import Header from '../Header';

const Layout = ({ children }) => {
	return (
		<div className='md:mx-20'>
			<Header />
			<div className='p-5'>{children}</div>
		</div>
	);
};

export default Layout;
