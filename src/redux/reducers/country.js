import { handleActions } from 'redux-actions';
import { action3, action4 } from "../actions";

export default handleActions({
    [action3]: (state, action) => {
        return ['action', 3, 'country'];
    },
    [action4]: (state, action) => {
        return ['action', 4, 'country'];
    },
}, []);