import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countries from './reducers/countries';

const reducer = combineReducers({
    countries,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;