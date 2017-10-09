import {  FETCH_PRODUCTS } from '../actions/index';

const INITIAL_STATE = { products: [] };

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { ...state, products: action.payload.data };
		default: return state;
	}
}