import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class ModalDelete extends Component {

	render() {
		return (
			<ButtonToolbar>
				<Button bsStyle="success">Yep</Button>
				<Button className='col-lg-offset-1'>Nope</Button>
			</ButtonToolbar>
		)
	}
}

export default ModalDelete;