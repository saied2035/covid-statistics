import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries/countries';

const rootReducer = combineReducers({ countriesReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
