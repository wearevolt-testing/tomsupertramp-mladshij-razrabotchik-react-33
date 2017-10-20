import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createProduct, closeModal, fetchProducts, editProduct } from '../actions/index';
import { Button } from 'react-bootstrap';

class ProductNew extends Component {

	onSubmit(props) {
		if (!this.props.modal.modalProps.edit) {
			this.props.createProduct(props).then(() => {
				this.props.closeModal();
				this.props.fetchProducts();
			});
		} else {
			this.props.editProduct(this.props.modal.modalProps.product.id, props).then(() => {
				this.props.closeModal();
				this.props.fetchProducts();
			})
		}
	}

	render() {
		const { fields: { name, price }, handleSubmit } = this.props;
		if (this.props.modal.modalProps.edit) {
			name.defaultValue = this.props.modal.modalProps.product.name;
			price.defaultValue = this.props.modal.modalProps.product.price;
		}

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
				<Button type="submit">{this.props.modal.modalProps.edit ? 'Save' : 'Create'}</Button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'ProductNewForm',
	fields: ['name','price']
}, null, { createProduct, closeModal, fetchProducts, editProduct } )(ProductNew);