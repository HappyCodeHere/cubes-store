import React, { Component } from 'react';

import CubesList from './CubesList.js';

import { connect } from 'react-redux';
import { selectButton } from '../actions/index.js';

 class App extends Component {
  render() {
  	const { ...rest } = this.props;
    return (
      <div>
      	<CubesList { ...rest }/>
      	{this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state) {
	const { selectButtonData } = state;
	return {
		selectButtonData
	}
}

export default connect(mapStateToProps, { selectButton } )(App);