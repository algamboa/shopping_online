import ACTIONS_TYPES from '../actions/ActionsTypes';

const initialState = {
  loading: false,
  data: [],
  error: '',
  detailProduct: null
};

const DetailProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.ADD_PRODUCT:
      
      const products = state.data.filter((product) => product.tail !== action.payload.tail);
      return {
        ...state,
        data: [...products, action.payload]
      };      
    case ACTIONS_TYPES.EMPTY_CART:
      return initialState;
    case ACTIONS_TYPES.SET_CART:
      return {
        ...state,
        data: [...action.payload]
      }; 
    default:
      return state;
  }
};

export default DetailProductReducer;