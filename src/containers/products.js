import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts, createProduct, openModal, closeModal } from '../actions/index';
import { Button, ButtonGroup, Grid, Row, Col, Table } from 'react-bootstrap';
import Popup from '../components/popup';
import ProductNew from './product_new';

class Products extends Component {
	componentWillMount() {
		this.props.fetchProducts();
	}

	onCreate() {
		this.props.openModal('CREATE_PRODUCT',{title: 'Create product'});
	}

	onDelete(product) {
		this.props.openModal('DELETE_CONFIRM',{title: 'Delete product?', id: product.id, type: 'products'});
	}

	renderProducts() {
		console.log(this.props);
		return this.props.products.products.map((product, ind) => {
			const { id, name, price } = product;
			return(
				<tr key={id}>
					<td>{ind+1}</td>
					<td>{name}</td>
					<td>{price}</td>
					<td>
						<ButtonGroup>
							<Button  bsStyle="link">Edit</Button>
							<Button onClick={this.onDelete.bind(this, product)}
									bsStyle="link">
								Delete
							</Button>
						</ButtonGroup>
					</td>
				</tr>
			)
		})
	}
	render() {
		return(
			<Grid>
				<Row>
					<Col xs={12}>
						<h1>Products <Button onClick={this.onCreate.bind(this)}>Create</Button></h1>
						<Table>
							<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Price</th>
								<th />
							</tr>
							</thead>
							<tbody>
							{this.renderProducts()}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Grid>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchProducts, openModal, closeModal }, dispatch);
}

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);