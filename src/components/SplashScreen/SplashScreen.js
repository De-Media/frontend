import React from 'react';
import iconLogo from '../../assets/images/icon-logo.png';
import nameLogo from '../../assets/images/name-logo.png';

function SplashScreen() {
	return (
		<div>
			<div className='spashScreen rubberBandAni'>
				<img src={iconLogo} height={100} alt='icon-logo' />
				<img src={nameLogo} height={100} alt='name-logo' />
			</div>
		</div>
	);
}

export default SplashScreen;
