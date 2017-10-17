import { FETCH_PRODUCTS } from '../actions/index';
import { FETCH_PRODUCT } from '../actions/index';

const INITIAL_STATE = { products: [], product: null };

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { ...state, products: action.payload.data };
		case FETCH_PRODUCT:
			return { ...state, product: action.payload.data };
		default: return state;
	}
}