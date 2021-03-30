import React from 'react';
import logo from '../logo.png';
import {Link} from 'react-scroll'
//React fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img className="logo" src={logo} alt="logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link smooth={true} to="home" className="nav-link" aria-current="page" href="#">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} offset={-110} to="about" className="nav-link" href="#">
								about me
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} offset={-110} to="services" className="nav-link" href="#">
								services
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} offset={-110} to="experience" className="nav-link" href="#">
								experience
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} offset={-110} to="portfolio" className="nav-link" href="#">
								portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} offset={-110} to="contacts" className="nav-link" href="#">
								contacts
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
