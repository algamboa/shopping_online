import ACTION_TYPES from './ActionsTypes.js';

export const aProduct = (data) => ({
	type: ACTION_TYPES.ADD_PRODUCT,
    payload: data
});

export const emptyCart = (data) => ({
	type: ACTION_TYPES.EMPTY_CART,
	payload: data
});

export const setCart = (data) => ({
	type: ACTION_TYPES.SET_CART,
	payload: data
});