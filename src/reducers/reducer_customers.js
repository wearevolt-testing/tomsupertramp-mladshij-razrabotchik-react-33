import { FETCH_CUSTOMERS, FETCH_CUSTOMER } from '../actions/index';

const INITIAL_STATE = { all: [], customer: null };

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_CUSTOMERS:
			return { ...state, all: action.payload.data };
		case FETCH_CUSTOMER:
			return { ...state, customer: action.payload.data };
		default: return state;
	}
}