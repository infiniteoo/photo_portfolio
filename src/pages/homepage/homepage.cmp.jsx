import React from 'react';
import './homepage.scss';
import Hero from '../../components/hero/hero.cmp';
import ItemHome from '../../components/item-home/item-home.cmp';
import { FullPage, Slide } from 'react-full-page';


class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: [
				{
					id: 1,
					title: 'Concerts',
					subtitle: 'Live Music Experiences',
					imageUrl: 'https://res.cloudinary.com/dp5m1hatx/image/upload/v1617744913/images/concert/Cold_War_Kids_First_Ave_028_s68ucx.jpg',
					revield: false
				},
				{
					id: 2,
					title: 'Sports',
					subtitle: 'Capturing the Action',
					imageUrl: 'https://res.cloudinary.com/dp5m1hatx/image/upload/v1617744484/images/sports/twins_vs_indians_042017_033_c2xfi8.jpg',
					revield: false
				},
				{
					id: 3,
					title: 'People',
					subtitle: 'Candid Shots of Real People',
					imageUrl:
						'https://res.cloudinary.com/dp5m1hatx/image/upload/v1617744404/images/events/May_Day_Parade_050717_035_tg8zxf.jpg',
					revield: false
				},
				{
					id: 4,
					title: 'City',
					subtitle: 'Urban Environments',
					imageUrl: 'https://res.cloudinary.com/dp5m1hatx/image/upload/v1617744236/images/city/dylan_2_wfqaz7.jpg',
					revield: false
				},
				{
					id: 5,
					title: 'Events',
					subtitle: 'Community Events',
					imageUrl: 'https://res.cloudinary.com/dp5m1hatx/image/upload/v1617744390/images/events/May_Day_Parade_050717_005_ry40px.jpg',
					revield: false
				}
				,
				{
					id: 6,
					title: 'Misc',
					subtitle: 'Random Shots',
					imageUrl: 'https://res.cloudinary.com/dp5m1hatx/image/upload/v1617744421/images/misc/bruce_glamour_headshot_h7fzqu.png',
					revield: false
				}
			]
		};
	}

	handleWaypoint = (index, action) => {
		this.setState((state) => {
			const list = state.sections.map((item, i) => {
				if (index === i) {
					if (action === 'enter') {
						return (item.revield = true);
					} else if (action === 'leave') {
						return (item.revield = false);
					}
				}
				return item;
			});
			return {
				list
			};
		});
	};

	render() {
		return (
			<FullPage className="fullpage-wrapper">
				<Slide>
					<Hero />
				</Slide>
				{this.state.sections.map((item, index) => (
					<Slide key={item.id}>
						<ItemHome item={item} handleWaypoint={this.handleWaypoint} reviel={this.state.sections} index={index} />
					</Slide>
				))}
			</FullPage>
		);
	}
}

export default HomePage;
