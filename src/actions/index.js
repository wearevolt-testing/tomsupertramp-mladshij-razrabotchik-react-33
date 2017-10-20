import axios from 'axios';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

const URL = '/api';

export function openModal(type, props) {
	return {
		type: OPEN_MODAL,
		payload: {
			modalType: type,
			modalProps: props
		}
	};
}

export function closeModal() {
	return {
		type: CLOSE_MODAL
	};
}

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

export function createCustomer(props) {
	const request = axios.post(`${URL}/customers/`, props);

	return {
		type: CREATE_CUSTOMER,
		payload: request
	}
}

export function createProduct(props) {
	const request = axios.post(`${URL}/products/`, props);

	return {
		type: CREATE_PRODUCT,
		payload: request
	}
}

export function deleteCustomer(id) {
	const request = axios.delete(`${URL}/customers/${id}`);

	return {
		type: DELETE_CUSTOMER,
		payload: request
	}
}

export function deleteProduct(id) {

	const request = axios.delete(`${URL}/products/${id}`);
	return {
		type: DELETE_PRODUCT,
		payload: request
	}
}

export function fetchProduct(id) {
	const request = axios.get(`${URL}/products/${id}`);
	return {
		type: FETCH_PRODUCT,
		payload: request
	}
}

export function fetchCustomer(id) {
	const request = axios.get(`${URL}/customers/${id}`);
	return {
		type: FETCH_CUSTOMER,
		payload: request
	}
}

export function editProduct(id, props) {
	const request = axios.put(`${URL}/products/${id}`, props);

	return {
		type: EDIT_PRODUCT,
		payload: request
	}
}

export function editCustomer(id, props) {
	const request = axios.put(`${URL}/customers/${id}`, props);

	return {
		type: EDIT_CUSTOMER,
		payload: request
	}
}
