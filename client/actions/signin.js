import { SET_CURRENT_USER } from './types';

import axios from 'axios';

import setAuthorizationToken from '../utils/setAuthorizationToken';

import jwt from 'jsonwebtoken';


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function userSignIn(data) {
    return dispatch => {
        return axios.post('/auth', data).then(resp => {
            const token = resp.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);

            dispatch(setCurrentUser(jwt.decode(token)))
        })
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken')
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}