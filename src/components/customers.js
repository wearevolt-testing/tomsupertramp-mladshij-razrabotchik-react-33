import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCustomers } from "../actions/index";

class Customers extends Component {
	componentWillMount() {
		this.props.fetchCustomers();
	}

	render() {
		return(
			<div>List of customers</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCustomers }, dispatch);
}

export default connect(null, mapDispatchToProps)(Customers);