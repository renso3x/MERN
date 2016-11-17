import { SET_CURRENT_USER, SET_USERS } from '../actions/types';
import _ from 'underscore';

const initState = {
    isAuthenticated: false,
    user: {},
    users: []
}

const user = (state=initState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !_.isEmpty(action.user),
                user: action.user
            };
        case SET_USERS:
            return {
                ...state,
                users: [action.users]
            };
        default: return state;
    }
};

export default user;