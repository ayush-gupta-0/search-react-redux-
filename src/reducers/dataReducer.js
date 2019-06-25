import { FETCH_DATA } from '../actions/types';

const initialState = {
    filtered: [],
    search: ""
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                filtered: action.payload.one,
                search: action.payload.two
            }
        default:
            return {
                ...state
            }
    }
}