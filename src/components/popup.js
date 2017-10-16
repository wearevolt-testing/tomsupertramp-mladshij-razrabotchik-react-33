import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


class Popup extends Component {

	render() {
		return (
			<Modal {...this.props}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.children}
				</Modal.Body>
			</Modal>
		)
	}
}

export default Popup;