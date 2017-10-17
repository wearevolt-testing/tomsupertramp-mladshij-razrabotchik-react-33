import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createProduct, closeModal, fetchProducts } from '../actions/index';
import { Button } from 'react-bootstrap';

class ProductNew extends Component {

	onSubmit(props) {
		this.props.createProduct(props).then(() => {
			this.props.closeModal();
			this.props.fetchProducts();
		});
	}

	render() {
		const { fields: { name, price }, handleSubmit } = this.props;
		return (
			<form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
				<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" {...name} />
				</div>
				<div className="form-group">
					<label>Price</label>
					<input type="text" className="form-control" {...price} />
				</div>
				<Button type="submit">Create</Button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'ProductNewForm',
	fields: ['name','price']
}, null, { createProduct, closeModal, fetchProducts } )(ProductNew);