import { store } from '../index';

import axios from 'axios';

export const GET_EVENT = 'GET_EVENT';
export const GET_CHANNEL = 'GET_CHANNEL';
export const SET_EVENTS_IN_CHANNEL = 'SET_EVENTS_IN_CHANNEL';

export const SEARCH_EVENT_TAG = 'SEARCH_EVENT_TAG';
export const SEARCH_EVENT_KEYWORD = 'SEARCH_EVENT_KEYWORD';
export const SEARCH_CHANNEL_KEYWORD = 'SEARCH_CHANNEL_KEYWORD';
export const SEARCH_BY_DATE = 'SEARCH_BY_DATE';

export const FETCH_NEW_EVENT = 'FETCH_NEW_EVENT';
export const FETCH_ALL_EVENTS = 'FETCH_ALL_EVENTS';
export const FETCH_ALL_CHANNELS = 'FETCH_ALL_CHANNELS';


const hostname = "http://188.166.241.104:1111/";

export function getChannel(id) {
    const request = axios.get(`${hostname}channel?id=${id}`).then((channel) => {
        var eventsPromiseAsync = [];

        channel.data.events.map((event_id) => {
            var tmp = new Promise((resolve, reject) => {
                axios.get(`${hostname}event?id=${event_id}`).then((data) => {

                    store.dispatch({
                        type: SET_EVENTS_IN_CHANNEL,
                        payload: data
                    });

                    resolve(data);
                }, (error) => {
                    reject(error);
                });
            });

            eventsPromiseAsync.push(tmp);

        });

        return channel;
    });
    return {
        type: GET_CHANNEL,
        payload: request
    };
}

export function getEvent(id) {
    const request = axios.get(`${hostname}event?id=${id}`);
    return {
        type: GET_EVENT,
        payload: request
    };
}

export function searchEvent(keyword) {
    const request = axios.get(`${hostname}event/search?keyword=${keyword}`);
    return {
        type: SEARCH_EVENT_KEYWORD,
        payload: request
    };
}

export function searchChannel(keyword) {
    const request = axios.get(`${hostname}channel/search?keyword=${keyword}`);
    return {
        type: SEARCH_CHANNEL_KEYWORD,
        payload: request
    };
}

export function searchEventTag(tags) {
    //tags is array of string tag
    let searchWord = "";
    tags.map((tag, index) => {
        if(index != tags.length-1) searchWord += tag + ",";
        else searchWord += tag;
    });
    const request = axios.get(`${hostname}tags/search?keywords=${searchWord}`);
    return {
        type: SEARCH_EVENT_TAG,
        payload: request
    }
}

export function searchByDate(startDate, endDate) {
    const request = axios.get(`${hostname}event/searchbydate?date_start=${startDate}&date_end=${endDate}`);
    return {
        type: SEARCH_BY_DATE,
        payload: request
    }
}

export function getNewEvent(top) {
    let request = null;
    if(top != null && top >= 1) {
        request = axios.get(`${hostname}event/new?top=${top}`);
    }
    else {
        request = axios.get(`${hostname}event/new`);
    }
    return {
        type: FETCH_NEW_EVENT,
        payload: request
    };
}

export function getAllEvent() {
    const request = axios.get(`${hostname}listAll`);
    return {
        type: FETCH_ALL_EVENTS,
        payload: request
    }
}

export function getAllChannel() {
    const request = axios.get(`${hostname}channel/listAll`);
    return {
        type: FETCH_ALL_CHANNELS,
        payload: request
    }
}
