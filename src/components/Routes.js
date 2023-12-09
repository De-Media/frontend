import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import PollPage from '../pages/PollPage/PollPage';

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/polls' element={<PollPage />} />
				<Route path='/profile' element={<ProfilePage />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
