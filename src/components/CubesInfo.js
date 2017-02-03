import React, { Component } from 'react';
import { Link } from 'react-router';

import ContactForm from './ContactForm';

import { cubes, stickers, other } from '../cubes.js';

class CubesInfo extends Component {
	constructor() {
		super();

		this.state = {
			isShowNumberForm: false,
		}

		this.handleButtonOrderClick = this.handleButtonOrderClick.bind(this);

	}



	componentWillMount() {
		Object.keys(cubes).map(item =>{
			return
		})

	}

	handleButtonOrderClick() {
		this.setState({isShowNumberForm: !this.state.isShowNumberForm});

	}

	render() {
		let url = this.props.params.id;
		while(url.indexOf('_') > 0) {
			url = url.replace('_', ' ');
		}

		// console.log(this.props.params.id);
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
					<button className="btn btn-info" onClick={this.handleButtonOrderClick}> Заказать! </button>

					<Link to="/" className="btn btn-danger"> Вернуться назад </Link>
					{this.state.isShowNumberForm ? <ContactForm /> : null}
				</div>
			</div>
		)
	}
}

export default CubesInfo;
