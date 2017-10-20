import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createCustomer, closeModal, fetchCustomers, editCustomer } from '../actions/index';
import { Button } from 'react-bootstrap';

class CustomerNew extends Component {

	onSubmit(props) {
		if(!this.props.modal.modalProps.edit) {
			this.props.createCustomer(props).then(() => {
				this.props.closeModal();
				this.props.fetchCustomers();
			});
		} else {
			this.props.editCustomer(this.props.modal.modalProps.customer.id, props).then(() => {
				this.props.closeModal();
				this.props.fetchCustomers();
			})
		}

	}


	render() {
		const { fields: { name, address, phone }, handleSubmit } = this.props;
		if (this.props.modal.modalProps.edit) {
			name.defaultValue = this.props.modal.modalProps.customer.name;
			address.defaultValue = this.props.modal.modalProps.customer.address;
			phone.defaultValue = this.props.modal.modalProps.customer.phone;
		}

		return (
			<form onSubmit = {handleSubmit(this.onSubmit.bind(this)) }>
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
				<Button type="submit">{this.props.modal.modalProps.edit ? 'Save' : 'Create'}</Button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'CustomerNewForm',
	fields: ['name','address','phone']
}, null, { createCustomer, closeModal, fetchCustomers, editCustomer } )(CustomerNew);