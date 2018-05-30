import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import allReducers from './reducers';
import App from './components/App';

const persistConfig = {
    key: 'root',
    storage,
  }  

const persistedReducer = persistReducer(persistConfig, allReducers);
const logger = createLogger();
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, promise, logger)
);
const persistor = persistStore(store);

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);