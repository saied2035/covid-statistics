import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries/countries';
import regionsReducer from './regions/regions';

const rootReducer = combineReducers({ countriesReducer, regionsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
