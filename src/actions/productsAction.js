import { GET_PRODUCTS, PRODUCTS_ERROR } from './../Types';
import axios from 'axios';

export const getProducts = (url) => async dispatch => {
	try {
		const res = await axios.get('https://www.amiiboapi.com/api/amiibo/');
		if (res.data.amiibo) {
			const data = res.data.amiibo.map(
				product => {
					return product
				}
			)
			dispatch({
				type: GET_PRODUCTS,
				payload: data
			});
		}
	}
	catch (e) {
		dispatch({
			type: PRODUCTS_ERROR,
			payload: console.log(e)
		});
	}
}