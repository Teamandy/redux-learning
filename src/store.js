import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from './reducers/indexReducer';

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(reducer, middleware);

export default store;