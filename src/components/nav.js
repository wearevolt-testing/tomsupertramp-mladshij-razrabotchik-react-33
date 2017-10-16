import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
	return(
		<Navbar>
			<Navbar.Header>
				<Navbar.Brand>InvoiceApp</Navbar.Brand>
			</Navbar.Header>
			<Nav>
				<LinkContainer to='/invoices'>
					<NavItem eventKey={1}>
						Invoices
					</NavItem>
				</LinkContainer>
				<LinkContainer to='/products'>
					<NavItem eventKey={2}>
						Products
					</NavItem>
				</LinkContainer>
				<LinkContainer to='/customers'>
					<NavItem eventKey={3}>
						Customers
					</NavItem>
				</LinkContainer>
			</Nav>
		</Navbar>
	)
};

export default Navigation;