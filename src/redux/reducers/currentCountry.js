import { handleActions } from 'redux-actions';
import { getCountryByCodeSuccess } from "../actions";

export default handleActions({
    [getCountryByCodeSuccess]: (state, action) => {
        return action.payload;
    },
}, []);