import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const logger = createLogger();
const store = createStore(
    allReducers,
    persistedState,
    applyMiddleware(thunk, promise, logger)
);

store.subscribe(() => {
    saveState(store.getState());
});

console.log(store);

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
);