import axios from 'axios';
import { useState } from 'react';
import getRandomPrice from '../utils/GetRandomPrice';
import { fetchData, fetchSuccess, fetchError } from './ApiProductsAction';

const ApiProductsAction = (url) => (dispatch) => {
	dispatch(fetchData());
	return new Promise(() => {
		axios
			.get(url)
			.then((response) => {
				const products = response.data.amiibo.map(
					(data, i) => {
						data.price = getRandomPrice();
						return data
					}
				)
				dispatch(fetchSuccess(products));
			})
			.catch((error) => {
				dispatch(fetchError(error));
				console.log(error);
			});
	});
}

export default ApiProductsAction;