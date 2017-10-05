import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import 'react-select/dist/react-select.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<div>invoiceApp</div>
	</Provider>,
	document.getElementById('app-root'));
