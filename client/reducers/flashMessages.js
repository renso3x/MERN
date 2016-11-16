import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';

let id = 0;
const flashMessages = (state=[], action) => {
    switch(action.type) {
        case ADD_FLASH_MESSAGE: {
            return [
                ...state,
                {
                    id: id++,
                    type: action.message.type,
                    text: action.message.text
                }
            ]
            break;
        }
        case DELETE_FLASH_MESSAGE: {
            return [
                ...state.splice(0, action.id),
                ...state.splice(action.id + 1),
            ]
        }
        default: return state;
    }
};

export default flashMessages;