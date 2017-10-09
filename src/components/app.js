import React, { Component } from 'react';
import Navigation from './nav';

export default class App extends Component {
	render() {
		return(
			<div>
				<Navigation />
				{this.props.children}
			</div>
		)
	}
}