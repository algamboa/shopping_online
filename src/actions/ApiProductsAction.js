import ACTION_TYPES from './ActionsTypes.js';

export const fetchData = () => ({
	type: ACTION_TYPES.API_PRODUCTS_PENDING,
});

export const fetchSuccess = (data) => ({
	type: ACTION_TYPES.API_PRODUCTS_SUCCESS,
	payload: data,
});

export const fetchError = (error) => ({
	type: ACTION_TYPES.API_PRODUCTS_ERROR,
	payload: error,
});

export const fetchDetail = (data) => ({
	type: ACTION_TYPES.SELECTION_PRODUCT,
	payload: data,
});