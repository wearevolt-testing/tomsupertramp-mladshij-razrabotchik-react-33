import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Customers from './components/customers';
import Products from './components/products';
import Invoices from './components/invoices';

export default (
	<Route path='/' component={App}>
		<Route path='invoices' component={Invoices} />
		<Route path='products' component={Products} />
		<Route path='customers' component={Customers} />
	</Route>
)