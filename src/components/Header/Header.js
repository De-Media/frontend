import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/full-logo.png';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const headerLinks = [
	{
		id: 1,
		title: 'First Link',
		to: '',
	},
	{
		id: 2,
		title: 'Second Link',
		to: '',
	},
	{
		id: 3,
		title: 'Third Link',
		to: '',
	},
	{
		id: 4,
		title: 'Fourth Link',
		to: '',
	},
];

const Header = () => {
	const navigate = useNavigate();

	const { signOut } = useAuth();

	const handleOpenProfilePage = () => {
		navigate('/profile');
	};
	const handleSignout = () => {
		signOut();
	};

	const profileLinks = [
		{
			id: 1,
			title: 'Profile',
			onClick: handleOpenProfilePage,
		},
		{
			id: 2,
			title: 'Sign out',
			onClick: handleSignout,
		},
	];

	return (
		<header className='text-gray-600 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<Link className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<img src={logo} width={200} alt='Logo' />
				</Link>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					{headerLinks.map((link) => (
						<Link key={link.id} to={link.to} className='mr-5 hover:text-gray-900'>
							{link.title}
						</Link>
					))}
				</nav>
				<Menu as='div' className='relative inline-block text-left'>
					<div>
						<Menu.Button>
							<img
								className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
								src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
								alt=''
							/>
						</Menu.Button>
					</div>
					<Transition
						enter='transition ease-out duration-100'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-75'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'>
						<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
							<div className='py-1'>
								{profileLinks.map((link) => (
									<Menu.Item key={link.id}>
										<button
											onClick={link.onClick}
											className={
												'text-gray-700 block w-full px-4 py-2 text-left text-sm'
											}>
											{link.title}
										</button>
									</Menu.Item>
								))}
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</header>
	);
};

export default Header;
