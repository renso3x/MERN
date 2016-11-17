import axios from 'axios';
import { SET_USERS } from './types';

export function getAllUsers() {
    return dispatch => {
        return axios.get('/api/users');
    }
}


export function fetchUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}
