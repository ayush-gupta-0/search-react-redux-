import { CHANGE_SIZE } from '../actions/types';

const initialState = {
    size: 10
}

export default function(state=initialState, action) {
    switch(action.type) {
        case CHANGE_SIZE:
            return {
                ...state,
                size: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

