import React from 'react';
import Typed from 'react-typed';

export const Header = () => {
	return (
		<div id="home" className="header-wraper">
			<div className="main-info">
				<h1>blockchain and web development</h1>
				<Typed
					className="typed-text"
					strings={[ 'React', 'Blockchain', 'Web Development', 'JavaScript' ]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				<a href="#" className="btn-main-offer">
					contact me
				</a>
			</div>
		</div>
	);
};

export default Header;
