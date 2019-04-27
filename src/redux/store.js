import { createStore, combineReducers } from 'redux';
import countries from './reducers/countries';
import country from './reducers/country';
import currentCountry from './reducers/currentCountry';

const reducer = combineReducers({
    countries,
    country,
    currentCountry
});

const store = createStore(reducer);

export default store;