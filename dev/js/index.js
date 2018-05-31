import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import { loadState, saveState } from './localStorage';
import {BrowserRouter as Router, Switch, Route, IndexRoute} from 'react-router-dom';
// import {AppComp} from './components/App';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

require('../scss/style.scss');

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

class MainApp extends React.Component {
    render() {        
            return (
                <Router>
                    <Switch>
                        <Route path={"/userList"} component={UserList}/>
                        <Route path={"/userDetail"} component={UserDetail}/>
                    </Switch>
                </Router>
            );        
    }
}

ReactDOM.render(
    <Provider store={store}>
            <MainApp />
    </Provider>,
    document.getElementById('root')
);