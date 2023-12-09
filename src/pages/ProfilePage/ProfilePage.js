import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import bountyIcon from '../../assets/images/bounty-3.webp';
import trustIcon from '../../assets/images/bounty.png';
import Layout from '../../components/Layout/Layout';
import { Box, Tab, Tabs } from '@mui/material';

import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import TabContext from '@mui/lab/TabContext';

const ProfilePage = () => {
	const userName = 'Aryan Dixit';
	const userProfilePicture =
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
	const userEmail = 'aryan.dixit@bc.com';
	const bounty = 400;
	const trustScore = 89;
	const trustColor = trustScore < 40 ? 'error' : trustScore < 60 ? 'warning' : 'success';

	const [value, setValue] = React.useState(1);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Layout>
			<section class='text-gray-600 body-font'>
				<div class='container px-5 mx-auto flex flex-col'>
					<div class='lg:w-4/6 mx-auto'>
						<div class='flex flex-col sm:flex-row mt-10'>
							<div class='sm:w-1/3 text-center sm:pr-8 sm:py-4'>
								<div class='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
									<img
										className='inline-block rounded-full ring-2 ring-white'
										src={userProfilePicture}
										alt=''
									/>
								</div>
								<div class='flex flex-col items-center text-center justify-center'>
									<h2 class='font-medium title-font mt-4 text-gray-900 text-lg'>
										{userName}
									</h2>
									<div class='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
								</div>
							</div>
							<div class='sm:w-2/3 sm:px-8 sm:py-4  mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
								<div>
									<div className='flex items-center mb-3'>
										<img src={bountyIcon} alt='bounty' className='bountyIcon' />
										<div className='ml-3'>
											<h2>
												<strong>{bounty}</strong>
											</h2>
										</div>
									</div>

									<div className='flex items-center'>
										<img src={trustIcon} alt='bounty' className='w-12' />
										<div className='ml-2 flex-grow'>
											<LinearProgress
												style={{
													height: 10,
													borderRadius: 5,
												}}
												color={trustColor}
												variant='determinate'
												value={trustScore}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<TabContext value={value}>
							<Box sx={{ width: '100%' }}>
								<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
									<TabList
										onChange={handleChange}
										aria-label='lab API tabs example'>
										<Tab label='Posts' value={1} />
										<Tab label='Polls' value={2} />
									</TabList>
								</Box>
								<TabPanel value={1}>Posts</TabPanel>
								<TabPanel value={2}>Polls</TabPanel>
							</Box>
						</TabContext>
					</div>
				</div>
			</section>
		</Layout>
	);
};

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default ProfilePage;
