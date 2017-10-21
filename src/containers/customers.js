import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCustomers, fetchCustomer, openModal, closeModal } from '../actions/index';
import { Button, ButtonGroup, Grid, Row, Col, Table } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

class Customers extends Component {

	componentWillMount() {
		this.props.fetchCustomers();
	}

	onCreate() {
		this.props.openModal('MODAL_CUSTOMER', {
			title: 'Create customer'
		});
	}

	onDelete(customer) {
		this.props.openModal('DELETE_CONFIRM', {
			title: 'Delete customer?',
			id: customer.id,
			type: 'customers'
		});
	}

	onEdit(customer) {
		this.props.fetchCustomer(customer.id).then(() => {
			this.props.openModal(
				'MODAL_CUSTOMER',
				{
					title: 'Edit customer',
					edit: true,
					customer: this.props.customers.customer
				});
		});
	}

	renderCustomers() {
		return this.props.customers.all.map((customer, ind) => {
			const { id, name, address, phone } = customer;
			return(
				<tr key={id}>
					<td>{ind+1}</td>
					<td>{name}</td>
					<td>{address}</td>
					<td>{phone}</td>
					<td>
						<ButtonGroup>
							<Button onClick={this.onEdit.bind(this, customer)} bsStyle="link">Edit</Button>
							<Button onClick={this.onDelete.bind(this, customer)} bsStyle="link">Delete</Button>
						</ButtonGroup>
					</td>
				</tr>
			)
		})
	}

	render() {
		return(
			<DocumentTitle title='Customers'>
				<Grid>
					<Row>
						<Col xs={12}>
							<h1>Customers <Button onClick={this.onCreate.bind(this)}>Create</Button></h1>
							<Table>
								<thead>
									<tr>
										<th>#</th>
										<th>Name</th>
										<th>Address</th>
										<th>Phone</th>
										<th />
									</tr>
								</thead>
								<tbody>
								{this.renderCustomers()}
								</tbody>
							</Table>
						</Col>
					</Row>
				</Grid>
			</DocumentTitle>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCustomers, fetchCustomer, openModal, closeModal }, dispatch);
}

function mapStateToProps(state) {
	return {
		customers: state.customers
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);