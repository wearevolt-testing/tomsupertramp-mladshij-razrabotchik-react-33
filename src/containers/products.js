import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts, fetchProduct, openModal, closeModal } from '../actions/index';
import { Button, ButtonGroup, Grid, Row, Col, Table } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

class Products extends Component {
	componentWillMount() {
		this.props.fetchProducts();
	}

	onCreate() {
		this.props.openModal('MODAL_PRODUCT',{title: 'Create product'});
	}

	onDelete(product) {
		this.props.openModal('DELETE_CONFIRM',{title: 'Delete product?', id: product.id, type: 'products'});
	}
	onEdit(product) {
		this.props.fetchProduct(product.id).then(() => {
			this.props.openModal(
				'MODAL_PRODUCT',
				{
					title: 'Edit product',
					edit: true,
					product: this.props.products.product
				});
		});
	}

	renderProducts() {
		return this.props.products.all.map((product, ind) => {
			const { id, name, price } = product;
			return(
				<tr key={id}>
					<td>{ind+1}</td>
					<td>{name}</td>
					<td>{price}</td>
					<td>
						<ButtonGroup>
							<Button onClick={this.onEdit.bind(this, product)} bsStyle="link">Edit</Button>
							<Button onClick={this.onDelete.bind(this, product)} bsStyle="link">Delete</Button>
						</ButtonGroup>
					</td>
				</tr>
			)
		})
	}

	render() {
		return(
			<DocumentTitle title='Products'>
				<Grid>
					<Row>
						<Col xs={12}>
							<h1>Products<Button onClick={this.onCreate.bind(this)}>Create</Button></h1>
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
			</DocumentTitle>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchProducts, fetchProduct, openModal, closeModal }, dispatch);
}

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);