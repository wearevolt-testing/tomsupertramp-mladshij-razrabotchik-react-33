import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCustomers } from '../actions/index';
import { Button, Grid, Row, Col, Table } from 'react-bootstrap';

class Customers extends Component {

	componentWillMount() {
		this.props.fetchCustomers();
	}

	renderCustomers() {
		return this.props.customers.customers.map((customer, ind) => {
			const { id, name, address, phone } = customer;
			return(
				<tr key={id}>
					<td>{ind+1}</td>
					<td>{name}</td>
					<td>{address}</td>
					<td>{phone}</td>
				</tr>
			)
		})
	}

	render() {

		return(
			<Grid>
				<Row>
					<Col xs={12}>
						<h1>Customers <Button>Create</Button></h1>
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Address</th>
									<th>Phone</th>
								</tr>
							</thead>
							<tbody>
							{this.renderCustomers()}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Grid>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCustomers }, dispatch);
}

function mapStateToProps(state) {
	return {
		customers: state.customers
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);