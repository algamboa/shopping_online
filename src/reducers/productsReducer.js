import { GET_PRODUCTS } from '../Types';

const initialState = {
    products: [],
    loading: true
}

export default function (state = initialState, action) { 
    switch (action.type)
    {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        
        default: return state;
    }
}