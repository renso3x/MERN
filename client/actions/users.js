import axios from 'axios';
import { SET_USERS } from './types';

export function getAllUsers() {
    return dispatch => {
        return axios.get('/api/users')
                .then(resp => {
                    dispatch({
                        type: SET_USERS,
                        users: resp.data.user
                    })
                })
    }
}
