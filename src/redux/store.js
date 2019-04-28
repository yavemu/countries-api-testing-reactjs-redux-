import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countries from './reducers/countries';
import currentCountry from './reducers/currentCountry';

const reducer = combineReducers({
    countries,
    currentCountry,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;