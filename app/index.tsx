/**
 * index.tsx
 *
 * This is the entry file for the application
 */

// tslint:disable-next-line
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import root from 'window-or-global';

import App from './containers/App';
// import {default as Hello} from '../src/components/Hello';
import { Hello } from '../src';


const DevTools = (process.env.NODE_ENV === 'development')
    ? require('./containers/DevTools').default
    : null;

const Store = require('./store');

const selectLocationState = () => {
    let prevRoutingState;
    return (state) => {
        const routingState = state.route; // or state.route
        if (routingState !== prevRoutingState) {
            prevRoutingState = routingState;
        }
        return prevRoutingState;
    };
};

const store = Store.configure({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: selectLocationState(),
});

ReactDOM.render((
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path='/' component={App}>
                    <Route path='Hello' component={Hello} />
                </Route>
            </Router>
            {!!DevTools ? <DevTools /> : null}
        </div>
    </Provider>
), document.getElementById('app'));
