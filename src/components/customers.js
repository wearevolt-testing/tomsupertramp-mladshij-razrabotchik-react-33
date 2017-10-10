import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCustomers } from '../actions/index';
import { Button, Grid, Row, Col, Table, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Customers extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

	}

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

	openModal() {
		this.setState({ showModal: true });
	}

	closeModal() {
		this.setState({ showModal: false });
	}



	render() {

		const FieldGroup = ({ id, label, help, ...props }) => {
			return (
				<FormGroup controlId={id}>
					<ControlLabel>{label}</ControlLabel>
					<FormControl {...props} />
				</FormGroup>
			);
		};

		return(
			<div>
				<Grid>
					<Row>
						<Col xs={12}>
							<h1>Customers <Button onClick={this.openModal}>Create</Button></h1>
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
				<Modal show={this.state.showModal} onHide={this.closeModal}>
					<Modal.Header closeButton>
						<Modal.Title>Create customer</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<FieldGroup
								id="formControlsText"
								type="text"
								label="Text"
								placeholder="Enter text"
							/>
							<FieldGroup
								id="formControlsAddress"
								type="text"
								label="Address"
								placeholder="Enter address"
							/>
							<FieldGroup
								id="formControlsPhone"
								label="Phone"
								type="phone"
								placeholder="Enter phone"
							/>
							<Button>Create</Button>
						</form>
					</Modal.Body>
				</Modal>
			</div>
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