import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Customers from './components/customers';
import Products from './components/products'

export default (
	<Route path='/' component={App}>
		<Route path='customers' component={Customers} />
		<Route path='products' component={Products} />
	</Route>
)