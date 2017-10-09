import axios from 'axios';

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const URL = '/api';

export function fetchCustomers() {
	const request = axios.get(`${URL}/customers`);
	return {
		type: FETCH_CUSTOMERS,
		payload: request
	};
}

export function fetchProducts() {
	const request = axios.get(`${URL}/products`);
	return {
		type: FETCH_PRODUCTS,
		payload: request
	};
}