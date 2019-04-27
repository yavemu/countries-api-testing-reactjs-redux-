import { handleActions } from 'redux-actions';
import { action5, action6 } from "../actions";

export default handleActions({
    [action5]: (state, action) => {
        return ['action', 5, 'currentCountry'];
    },
    [action6]: (state, action) => {
        return ['action', 6, 'currentCountry'];
    },
}, []);