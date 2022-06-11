import { GET_PRODUCTS, PRODUCTS_ERROR } from './../Types';
import axios from 'axios';

export const getProducts = () => async dispatch => {

    try {
        const res = await axios.get('https://www.amiiboapi.com/api/amiibo/');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.amiibo
        });
    }
    catch (e) {
        dispatch({
            type: PRODUCTS_ERROR,
            payload: console.log(e)
        });
    }
}