import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createCustomer, closeModal, fetchCustomers } from '../actions/index';
import { Button } from 'react-bootstrap';

class CustomerNew extends Component {

	onSubmit(props) {
		this.props.createCustomer(props).then(() => {
			this.props.closeModal();
			this.props.fetchCustomers();
		});
	}

	render() {
		const { fields: { name, address, phone }, handleSubmit } = this.props;
		return (
			<form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
				<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" {...name} />
				</div>
				<div className="form-group">
					<label>Address</label>
					<input type="text" className="form-control" {...address} />
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input type="text" className="form-control" {...phone} />
				</div>
				<Button type="submit">Create</Button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'CustomerNewForm',
	fields: ['name','address','phone']
}, null, { createCustomer, closeModal, fetchCustomers } )(CustomerNew);