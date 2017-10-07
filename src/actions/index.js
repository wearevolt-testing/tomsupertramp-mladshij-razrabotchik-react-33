import axios from 'axios';

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';

const ROOT_URL = '/api';

export function fetchCustomers() {
	const request = axios.get(`${ROOT_URL}/customers`);
	return {
		type: FETCH_CUSTOMERS,
		payload: request
	};
}