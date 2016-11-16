import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initState = {
    user: {},
    fetched: false,
}

const reducer = (state=initState, action) => {
    switch(action.type) {
        default: return state;
    }
};

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

export default store;