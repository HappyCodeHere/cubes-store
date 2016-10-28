import React, { Component } from 'react';
import { Link } from 'react-router';

import { cubes, stickers, other } from '../cubes.json';

class CubesInfo extends Component {

	componentWillMount() {
		Object.keys(cubes).map(item =>{
			return 
		})

	}

	render() {
		let url = this.props.params.id;
		while(url.indexOf('_') > 0) {
			url = url.replace('_', ' ');
		}

		console.log(this.props.params.id);
		let fullName, price, description, images;
		let all = [cubes, stickers, other];
		all.map(item0 => {
			/*console.log(item0);*/


		return Object.keys(item0).map(item => {
			/*console.log(item)*/
			return item0[item].map(item2 => {
				/*console.log(item2)*/

			if (item2.name === url) {
				fullName = item2.fullName;
				price = item2.price;
				description = item2.description;
				images = item2.images;

				return;
			}	
			})
		})

		})
		return (
			<div className="cubes-info">
				<h3> {fullName} — {price}$ / {price * 19000} руб. </h3>
				<div className="cubes-info-main">
					<img src={images} />
					<p> {description} </p>
				</div>

				<div className="cubes-info-buttons">
					<Link to="/#contacts" className="btn btn-info"> Заказать! </Link>
					<Link to="/" className="btn btn-danger"> Вернуться назад </Link>
				</div>
			</div>
		)
	}
}

export default CubesInfo;