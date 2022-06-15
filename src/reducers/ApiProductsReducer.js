import ACTIONS_TYPES from './../actions/ActionsTypes';

const initialState = {
  loading: false,
  data: '',
  error: '',
};

const ApiProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.API_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS_TYPES.API_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTIONS_TYPES.API_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default ApiProductsReducer;