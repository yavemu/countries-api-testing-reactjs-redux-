import { handleActions } from 'redux-actions';
import { action1, action2 } from "../actions";

export default handleActions({
    [action1]: (state, action) => {
        return ['action',1,'countries'];
    },
    [action2]: (state, action) => {
        return ['action',2,'countries'];
    },
}, []);