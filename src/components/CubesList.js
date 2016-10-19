import React, { Component } from 'react';

import CubesItem from './CubesItem.js';
import { cubes, stickers, other } from '../cubes.json';

class CubesList extends Component {
	constructor() {
		super();

		this.state = {
			isCubesActive: true,
			isStickersActive: false,
			isOthersActive: false
		}

		this.handleButtonCubesClick = this.handleButtonCubesClick.bind(this);
		this.handleButtonStickersClick = this.handleButtonStickersClick.bind(this);
		this.handleButtonOthersClick = this.handleButtonOthersClick.bind(this);
	}

	handleButtonCubesClick() {
		this.setState({ isCubesActive: true, isStickersActive: false, isOthersActive: false })
	}

	handleButtonStickersClick() {
		this.setState({ isCubesActive: false, isStickersActive: true, isOthersActive: false })
	}

	handleButtonOthersClick() {
		this.setState({ isCubesActive: false, isStickersActive: false, isOthersActive: true })
	}

	render() {
		let list = Object.keys(cubes).map(item => {
			return <div className="animation"> 
				<h5> {item} </h5>
				{cubes[item].map(item2 => {
					return <CubesItem name={item2.name} price={item2.price}/>
				})}
			</div>
		})
		let list2 = Object.keys(stickers).map(item => {
			return <div className="animation">
				<h5> {item} </h5>
				{stickers[item].map(item2 => {
					return <CubesItem name={item2.name} price={item2.price}/>
				})}
			</div>
		})
		let list3 = Object.keys(other).map(item => {
			return <div className="animation"> 
				<h5> {item} </h5>
				{other[item].map(item2 => {
					return <CubesItem name={item2.name} price={item2.price}/>
				})}
			</div>
		})
		console.log(cubes, stickers, other);
		return (
			
			<div className="cubes-list">
				<h3> Что мы предлагаем </h3>
				<div className="buttons">
					<button className="btn btn-warning" onClick={this.handleButtonCubesClick}> Кубики </button>
					<button className="btn btn-danger" onClick={this.handleButtonStickersClick}> Наклейки </button>
					<button className="btn btn-info" onClick={this.handleButtonOthersClick}> Остальное </button>
				</div>
				<h4>{this.state.isCubesActive ? "Кубики" : this.state.isStickersActive ? "Наклейки" : this.state.isOthersActive ? "Остальное" : null} </h4>
					{ this.state.isCubesActive ? list : null}
					{this.state.isStickersActive ? list2 : null}
					{this.state.isOthersActive ? list3 : null}
			</div>
		)
	}
}

export default CubesList;