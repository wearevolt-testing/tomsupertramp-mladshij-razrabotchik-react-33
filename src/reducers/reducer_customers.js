import { FETCH_CUSTOMERS } from '../actions/index';
import { FETCH_CUSTOMER } from '../actions/index';

const INITIAL_STATE = { customers: [] };

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_CUSTOMERS:
			return { ...state, customers: action.payload.data };
		case FETCH_CUSTOMER:
			return { ...state, customer: action.payload.data };
		default: return state;
	}
}