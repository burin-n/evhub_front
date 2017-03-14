import { FETCH_ALL_EVENTS } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
    response: null,
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${FETCH_ALL_EVENTS}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${FETCH_ALL_EVENTS}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                response: action.payload.data
            };

            break;
        case `${FETCH_ALL_EVENTS}_REJECTED`:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

            break;
        default:
            return state;
    }
    return state
}
