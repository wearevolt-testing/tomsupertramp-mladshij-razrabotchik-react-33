import { combineReducers } from 'redux';
import CustomersReducer from './reducer_customers';
import ProductsReducer from './reducer_products';

const rootReducer = combineReducers({
	customers: CustomersReducer,
	products: ProductsReducer
});

export default rootReducer;