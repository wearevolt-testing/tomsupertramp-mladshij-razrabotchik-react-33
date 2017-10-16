import React, { Component } from 'react';
import Navigation from './nav';
import RootModal from '../containers/rootModal';

export default class App extends Component {
	render() {
		return(
			<div>
				<RootModal />
				<Navigation />
				{this.props.children}
			</div>
		)
	}
}