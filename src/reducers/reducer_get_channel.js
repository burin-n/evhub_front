import { GET_CHANNEL, SET_EVENTS_IN_CHANNEL } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
    channel: null,
    error_set_event: null,
    fetching_events: false,
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${GET_CHANNEL}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${GET_CHANNEL}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                response_channel: action.payload.data
            };

            break;
        case `${GET_CHANNEL}_REJECTED`:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

            break;
        case `${SET_EVENTS_IN_CHANNEL}_PENDING`:
            return {
                ...state,
                fetching_events: true,
                error_set_event: null,
            };

            break;
        case `${SET_EVENTS_IN_CHANNEL}`:
        case `${SET_EVENTS_IN_CHANNEL}_FULFILLED`:
            var newChannel = {...(state.channel)};
            if(newChannel.eventsInfo) newChannel.eventsInfo.push(action.payload.data);
            else newChannel.eventsInfo = [action.payload.data];

            return {
                ...state,
                channel: newChannel
            };

            break;
        case `${SET_EVENTS_IN_CHANNEL}_REJECTED`:
            return {
                ...state,
                fetching_events: false,
                error_set_event: action.payload
            };

            break;
        default:
            return state;
    }
    return state
}
