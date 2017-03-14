import { FETCH_NEW_EVENT } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
    response: null,
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${FETCH_NEW_EVENT}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${FETCH_NEW_EVENT}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                response: action.payload.data
            };

            break;
        case `${FETCH_NEW_EVENT}_REJECTED`:
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
