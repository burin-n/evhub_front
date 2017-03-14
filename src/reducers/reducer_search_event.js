import { SEARCH_EVENT_KEYWORD } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
    response: null,
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${SEARCH_EVENT_KEYWORD}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${SEARCH_EVENT_KEYWORD}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                response: action.payload.data
            };

            break;
        case `${SEARCH_EVENT_KEYWORD}_REJECTED`:
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
