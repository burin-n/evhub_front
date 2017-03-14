import { GET_EVENT } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
    event: null,
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${GET_EVENT}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${GET_EVENT}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                event: action.payload.data
            };

            break;
        case `${GET_EVENT}_REJECTED`:
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
