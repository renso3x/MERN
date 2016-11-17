import { SET_CURRENT_USER } from '../actions/types';

const initState = {
    isAuthenticated: false,
    user: {},
}

const user = (state=initState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: true,
                user: action.user
            };

        default: return state;
    }
};

export default user;