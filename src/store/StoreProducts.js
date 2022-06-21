import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import ApiProductsReducer from './../reducers/ApiProductsReducer';
import DetailProductReducer from '../reducers/DetailProductReducer';

const appReducers = combineReducers({
    ApiProductsReducer,
    DetailProductReducer
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const StoreProducts = createStore(rootReducer, applyMiddleware(thunk, logger));