import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from "../actions/index";

import Popup from '../components/popup';
import CustomerModal from './customer_modal';
import ProductModal from './product_modal';
import ModalDelete from './modal_delete';

const MODALS = {
	'MODAL_PRODUCT': ProductModal,
	'MODAL_CUSTOMER': CustomerModal,
	'DELETE_CONFIRM': ModalDelete
};

class RootModal extends Component {

	render() {
		if(!this.props.modal) {
			return <span/>;
		}
		const SpecificModal = MODALS[this.props.modal.modalType];
		return (
			<Popup show={true} onHide={this.props.closeModal} title={this.props.modal.modalProps.title}>
				<SpecificModal {...this.props} />
			</Popup>
		)
	}
}

function mapStateToProps(state) {
	return({
		modal: state.modal
	})
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ closeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RootModal);