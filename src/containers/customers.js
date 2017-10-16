import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCustomers, openModal, closeModal } from '../actions/index';
import { Button, ButtonGroup, Grid, Row, Col, Table } from 'react-bootstrap';
import Popup from '../components/popup';
import CustomerNew from './customer_new';
import ModalDelete from './modal_delete';

class Customers extends Component {

	componentWillMount() {
		this.props.fetchCustomers();
	}

	onCreate() {
		this.props.openModal('CREATE_CUSTOMER', {
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

	renderCustomers() {
		return this.props.customers.customers.map((customer, ind) => {
			const { id, name, address, phone } = customer;
			return(
				<tr key={id}>
					<td>{ind+1}</td>
					<td>{name}</td>
					<td>{address}</td>
					<td>{phone}</td>
					<td>
						<ButtonGroup>
							<Button  bsStyle="link">Edit</Button>
							<Button onClick={this.onDelete.bind(this, customer)}
							   bsStyle="link">
								Delete
							</Button>
						</ButtonGroup>
					</td>
				</tr>
			)
		})
	}

	render() {
		return(
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
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCustomers, openModal, closeModal }, dispatch);
}

function mapStateToProps(state) {
	return {
		customers: state.customers
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);