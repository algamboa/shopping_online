import { GET_PRODUCTS, PRODUCTS_ERROR } from './../Types';
import axios from 'axios';
import getRandomPrice from '../utils/GetRandomPrice';

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get('https://www.amiiboapi.com/api/amiibo/');
        console.log("HELPMEE")
        if (res.data.amiibo) { 
            const data = res.data.amiibo.map(
                product => {
                    console.log(getRandomPrice())
                    product.price = getRandomPrice()
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