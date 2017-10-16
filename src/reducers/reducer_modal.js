import {  OPEN_MODAL, CLOSE_MODAL } from '../actions/index';

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return action.payload;
		case CLOSE_MODAL:
			return INITIAL_STATE;
		default: return state;
	}
}