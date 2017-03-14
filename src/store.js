import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const createStoreWithMiddleware = applyMiddleware(promise(), logger(), thunk)(createStore);

export default createStoreWithMiddleware(reducers);
