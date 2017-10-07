import { combineReducers } from 'redux';
import CustomersReducer from './reducer_customers';

const rootReducer = combineReducers({
	customers: CustomersReducer
});

export default rootReducer;