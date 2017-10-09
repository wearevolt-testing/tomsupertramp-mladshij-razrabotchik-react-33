import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
	return(
		<Navbar>
			<Navbar.Header>
				<Navbar.Brand>InvoiceApp</Navbar.Brand>
			</Navbar.Header>
			<Nav>
				{/*<LinkContainer to='/'>*/}
					{/*<NavItem eventKey={1}>*/}
						{/*Invoices*/}
					{/*</NavItem>*/}
				{/*</LinkContainer>*/}
				<NavItem eventKey={1}>
					<Link to='/'>Invoices</Link>
				</NavItem>
				<NavItem eventKey={2}>
					<Link to='/products'>Products</Link>
				</NavItem>
				<NavItem eventKey={3}>
					<Link to='/customers'>Customers</Link>
				</NavItem>
			</Nav>
		</Navbar>
	)
};

export default Navigation;