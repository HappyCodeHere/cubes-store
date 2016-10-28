import React, { Component } from 'react';
import { Link } from 'react-router';

import CubesItem from './CubesItem.js';
import { cubes, stickers, other } from '../cubes.json';

class CubesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentActive: this.props.selectButtonData
		}

		this.handleButtonCubesClick = this.handleButtonCubesClick.bind(this);
		this.handleButtonStickersClick = this.handleButtonStickersClick.bind(this);
		this.handleButtonOthersClick = this.handleButtonOthersClick.bind(this);

		this.renderList = this.renderList.bind(this);
	}

	handleButtonCubesClick() {
		this.setState({ currentActive: "Кубики" });
		this.props.selectButton("Кубики");
	}

	handleButtonStickersClick() {
		this.setState({ currentActive: "Наклейки" });
		this.props.selectButton("Наклейки");
	}

	handleButtonOthersClick() {
		this.setState({ currentActive: "Остальное" });
		this.props.selectButton("Остальное");
	}

	renderList() {
		let data;


		switch (this.state.currentActive) {
			case "Кубики":
				data = cubes;
				break;
			case "Наклейки":
				data = stickers;
				break;
			case "Остальное":
				data = other;
				break;

			default:
				data = cubes;
		}

		let list = Object.keys(data).map((item, i) => {
			return <div key={i}> 
				<h5> {item} </h5>
				{data[item].map((item2, i) => {
					let url = item2.name;
					while(url.indexOf(' ') > 0) {
						url = url.replace(' ', '_');
					}
					return <Link to={url}><CubesItem key={i} name={item2.name} price={item2.price}/></Link>
				})}
			</div>
		})

		return list;
	}

	render() {

		return (
			<div className="cubes-list">
				<h3> Что мы предлагаем </h3>
				<div className="buttons">
					<button className="btn btn-warning" onClick={this.handleButtonCubesClick}> Кубики </button>
					<button className="btn btn-danger" onClick={this.handleButtonStickersClick}> Наклейки </button>
					<button className="btn btn-info" onClick={this.handleButtonOthersClick}> Остальное </button>
				</div>
				<h4>{this.state.currentActive}</h4>

				{this.renderList()}
			</div>
		)
	}
}

export default CubesList;