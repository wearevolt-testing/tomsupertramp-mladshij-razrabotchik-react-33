import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCustomer, deleteProduct, closeModal, fetchProducts, fetchCustomers } from "../actions/index";
import { ButtonToolbar, Button } from 'react-bootstrap';

class ModalDelete extends Component {

	onHandleClick() {
		const { id, type } = this.props.modal.modalProps;

		switch (type) {
			case 'customers':
				this.props.deleteCustomer(id).then(() => {
					this.props.closeModal();
					this.props.fetchCustomers();
				});
				break;
			case 'products':
				this.props.deleteProduct(id).then(() => {
					this.props.closeModal();
					this.props.fetchProducts();
				});
				break;
			default: return false;
		}

	}

	render() {
		return (
			<ButtonToolbar>
				<Button onClick={this.onHandleClick.bind(this)} bsStyle="success">Yep</Button>
				<Button onClick={this.props.closeModal}>Nope</Button>
			</ButtonToolbar>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deleteCustomer, deleteProduct, closeModal, fetchProducts, fetchCustomers }, dispatch);
}

export default connect(null, mapDispatchToProps)(ModalDelete);