import { combineReducers } from 'redux';
import CustomersReducer from './reducer_customers';
import ProductsReducer from './reducer_products';
import ModalReducer from './reducer_modal';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	customers: CustomersReducer,
	products: ProductsReducer,
	modal: ModalReducer,
	form: formReducer
});

export default rootReducer;