import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
	return (
		<React.Fragment>
			<Particles
				className="particles-canvas"
				params={{
					particles: {
						number: {
							value: 30,
							density: {
								enable: true,
								value_area: 900
							}
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 6,
								color: '#f9ab00'
							}
						}
					}
				}}
			/>
			<Navbar />
			<Header />
			<AboutMe />
			<Services />
			<Experience />
			<Portfolio />
			<Testimonials />
			<ContactMe />
			<Footer />
		</React.Fragment>
	);
}

export default App;
