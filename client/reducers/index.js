import { combinReducers } from 'redux';

import user from './user';

const reducers = combinReducers({
    user
});

export default reducers;