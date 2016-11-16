import { compose, createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducers,
    compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;