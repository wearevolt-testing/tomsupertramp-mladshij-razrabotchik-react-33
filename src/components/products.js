import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';
import { Button, Grid, Row, Col, Table } from 'react-bootstrap';

class Products extends Component {
	componentWillMount() {
		this.props.fetchProducts();
	}

	renderProducts() {
		return this.props.products.products.map((product, ind) => {
			const { id, name, price } = product;
			return(
				<tr key={id}>
					<td>{ind+1}</td>
					<td>{name}</td>
					<td>{price}</td>
				</tr>
			)
		})
	}
	render() {
		return(
			<Grid>
				<Row>
					<Col xs={12}>
						<h1>Products <Button>Create</Button></h1>
						<Table>
							<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Price</th>
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
	return bindActionCreators({ fetchProducts }, dispatch);
}

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);