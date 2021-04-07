import React from 'react';
import './about.scss';
import { Waypoint } from 'react-waypoint';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLink } from 'react-icons/fa';


class AboutPage extends React.Component {
	constructor() {
		super();
		this.state = {
			revield: false
		};
	}

	handleWaypoint = () => {
		this.setState((prevState) => ({
			revield:true
		}));
	};

	render() {
		
		return (
			<div className="about flex-c">
				
				<div className={`letters ${this.state.revield ? 'show' : ''}`}>Photographer.</div>
				<div className="backround" />
        <div className={`about-text flex-c ${this.state.revield ? 'show' : ''}`}>
        <Waypoint onEnter={this.handleWaypoint} />
					<h1 className="title">About me</h1>
					<h2>I'm a photographer, programmer, and audio engineer.</h2>
					<p>
						From 50 Cent, to Cold War Kids, to the Minnesota Twins, I've capture some beautiful moments. Let me do the same for you. Based in Western Idaho and available throughout the Pacific Northwest.  {' '}
						
						<br/><br/>
						<h3>Equipment</h3>
						
						<ul>
							<li>Canon 5D Mark IV</li>
							<li>Canon 70D</li>
							<li>Canon EF 70-200mm f/2.8</li>
							<li>Tamron SP 150-600mm</li>

						</ul>
					</p>
					<div className="about-social flex-c">
						<Link className="link-button" to="/contact">
							Contact me
						</Link>
						<a href="https://www.twitter.com/doorman_t" target="blank">
							<FaTwitter className="react-icons" />
						</a>
						<a href="https://www.github.com/infiniteoo" target="blank">
							<FaGithub className="react-icons" />
						</a>
						<a href="https://infiniteoo.github.io/react_portfolio_2021/" target="blank">
							<FaLink className="react-icons" />
						</a>
					</div>
				</div>
				<div className="about-image-area flex-c">
					{/* <img
						src="https://res.cloudinary.com/dp5m1hatx/image/upload/v1617763504/me_pgragd.jpg"
						className={`about-img ${this.state.revield ? 'show' : ''}`}
						alt="iliyan-portrait"
						style={{borderRadius:"200px", width: "75%", height: "75%"}}
					/> */}
				</div>
			</div>
		);
	}
}

export default AboutPage;
