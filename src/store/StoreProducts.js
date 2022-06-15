import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import ApiProductsReducer from './../reducers/ApiProductsReducer';

const appReducers = combineReducers({
    ApiProductsReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const StoreProducts = createStore(rootReducer, applyMiddleware(thunk, logger));