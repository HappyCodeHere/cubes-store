import React, { Component } from 'react';

import { connect } from 'react-redux';

import { phoneSend } from '../actions/index.js';

class ContactForm extends Component {
	constructor() {
		super();

		this.state = {
			number: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleInputChange(value) {
		this.setState({ number: event.tager.value })
	}

	handleButtonClick() {
		this.props.phoneSend(this.state.number);
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.number} onChange={this.handleInputChange}/>
				<button onClick={this.handleButtonClick}> Отправить номер телефона </button>
			</div>
		)
	}
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, { phoneSend } )(ContactForm);
