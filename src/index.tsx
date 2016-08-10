/**
 * index.tsx
 *
 * This is the entry file for the application
 */

// tslint:disable-next-line
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './containers/App/App';
import Hello from './components/Hello/Hello';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='Hello' component={Hello}/>
    </Route>
  </Router>
), document.getElementById('app'));
