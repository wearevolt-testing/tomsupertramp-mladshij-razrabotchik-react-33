import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from "../actions/index";

import Popup from '../components/popup';
import CustomerNew from './customer_new';
import ProductNew from './product_new';
import ModalDelete from '../components/modal_delete';

const MODALS = {
	'CREATE_PRODUCT': ProductNew,
	'CREATE_CUSTOMER': CustomerNew,
	'DELETE_CONFIRM': ModalDelete
};

class RootModal extends Component {

	render() {
		if(!this.props.modal) {
			return <span/>;
		}
		const SpecificModal = MODALS[this.props.modal.modalType];
		return (
			<Popup show={true} onHide={this.props.closeModal} title='Create'>
				<SpecificModal />
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