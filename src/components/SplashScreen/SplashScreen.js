import React, { Component, useEffect, useState } from 'react';
import iconLogo from '../../assets/images/icon-logo.png';
import nameLogo from '../../assets/images/name-logo.png';

function SplashScreen() {
	return (
		<div className='spashScreen'>
			<div className='flex '>
				<div className='flex rubberBandAni'>
					<img src={iconLogo} height={100} alt='icon-logo' />
					<img src={nameLogo} height={100} alt='name-logo' />
				</div>
			</div>
		</div>
	);
}

export const WithSplashScreen = (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				loading: true,
			};
		}
		async componentDidMount() {
			try {
				setTimeout(() => {
					this.setState({
						loading: false,
					});
				}, 2000);
			} catch (err) {
				this.setState({
					loading: false,
				});
			}
		}
		render() {
			if (this.state.loading) return <SplashScreen />;
			else return <WrappedComponent />;
		}
	};
};

export default SplashScreen;
