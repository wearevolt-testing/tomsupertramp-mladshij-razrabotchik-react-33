import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Customers from './containers/customers';
import Products from './containers/products';
import Invoices from './containers/invoices';

export default (
	<Route path='/' component={App}>
		<Route path='invoices' component={Invoices} />
		<Route path='products' component={Products} />
		<Route path='customers' component={Customers} />
	</Route>
)