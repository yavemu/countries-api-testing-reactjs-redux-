import { handleActions } from 'redux-actions';
import { getCountriesSuccess } from "../actions";

export default handleActions({
    [getCountriesSuccess]: (state, action) => {
        return action.payload;
    },
}, []);