import { GET_PRODUCTS, PRODUCTS_ERROR } from './../Types';
import axios from 'axios';

export const getProduct = (tail) => async dispatch => {
    try {
        const res = await axios.get('https://www.amiiboapi.com/api/amiibo/?' + tail);
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