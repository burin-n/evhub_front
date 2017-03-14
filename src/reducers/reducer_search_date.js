import { SEARCH_BY_DATE } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
    response: null,
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${SEARCH_BY_DATE}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${SEARCH_BY_DATE}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                response: action.payload.data
            };

            break;
        case `${SEARCH_BY_DATE}_REJECTED`:
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
