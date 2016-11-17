import { SET_CURRENT_USER } from '../actions/types';
import _ from 'underscore';

const initState = {
    isAuthenticated: false,
    user: {},
}

const user = (state=initState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !_.isEmpty(action.user),
                user: action.user
            };

        default: return state;
    }
};

export default user;