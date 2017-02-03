import React, { Component } from 'react';

import { connect } from 'react-redux';

import { phoneSend } from '../actions/index.js';

import { browserHistory } from 'react-router';

import toastr from 'toastr';

class ContactForm extends Component {
	constructor() {
		super();

		this.state = {
			number: '',
			text: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleTextareaChange = this.handleTextareaChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({ number: event.target.value });
	}

	handleTextareaChange(event) {
		this.setState({ text: event.target.value });
	}

	handleButtonClick() {
		var url = window.location.href;
		var pathArray = window.location.pathname.split( '/' );
		var secondLevelLocation = pathArray[1];

		// console.log(decodeURIComponent(secondLevelLocation));

		this.props.phoneSend(this.state.number, this.state.text, decodeURIComponent(secondLevelLocation));
		toastr.success( 'Телефон отправлен', 'Мы перезвоним в ближайшее время!');
		setTimeout( () => { browserHistory.push('/') }, 2000);
	}

	render() {
		return (
			<div className="contact-form">
				<h4>Оставь свой телефон, мы перезвоним;)</h4>
				<input type="text" value={this.state.number} onChange={this.handleInputChange} placeholder="Номер телефона" className="form-control"/>
				<br/>
				<textarea value={this.state.text} onChange={this.handleTextareaChange} placeholder="Комментарии" id="" cols="30" rows="5" className="form-control"></textarea>
				<button onClick={this.handleButtonClick} className="btn btn-success">Отправить</button>
			</div>
		)
	}
}



export default connect(null, { phoneSend } )(ContactForm);
