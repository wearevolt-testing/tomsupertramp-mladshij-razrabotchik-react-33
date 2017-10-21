import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Grid, Row, Col } from 'react-bootstrap';

const Invoices = () => {
	return (
		<DocumentTitle title='Invoices'>
			<Grid>
				<Row>
					<Col xs={12}>
						<div>Invoices are coming soon...</div>
					</Col>
				</Row>
			</Grid>
		</DocumentTitle>
	)
};

export default Invoices;
