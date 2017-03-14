import { combineReducers } from 'redux';
import reducer_get_channel from './reducer_get_channel';
import reducer_get_event from './reducer_get_event';
import reducer_search_event from './reducer_search_event';
import reducer_search_channel from './reducer_search_channel';
import reducer_search_date from './reducer_search_date';
import reducer_search_tag from './reducer_search_tag';
import reducer_fetch_all_channels from './reducer_fetch_all_channels';
import reducer_fetch_all_events from './reducer_fetch_all_events';
import reducer_fetch_new_event from './reducer_fetch_new_event';

const rootReducer = combineReducers({
    getEvent: reducer_get_event,
    getChannel: reducer_get_channel,
    searchEvent: reducer_search_event,
    searchChannel: reducer_search_channel,
    searchTag: reducer_search_tag,
    searchDate: reducer_search_date,
    fetchAllEvents: reducer_fetch_all_events,
    fetchAllChannels: reducer_fetch_all_channels,
    fetchNewEvents: reducer_fetch_new_event
});

export default rootReducer;
