import { combineReducers } from 'redux';

import user from './user';
import flashMessages from './flashMessages';

const reducers = combineReducers({
    user,
    flashMessages
});

export default reducers;