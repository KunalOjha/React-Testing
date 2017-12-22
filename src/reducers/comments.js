import {SAVE_COMMENT} from '../actions/types';

function commentsReducer( state=[], action ) {
    switch(action.type) {
        case SAVE_COMMENT:
            const newState = [...state, action.payload];
            return newState;
            
        default:
            return state
    } 
}

export default commentsReducer;