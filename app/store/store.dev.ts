/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from '../containers/DevTools';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from '../reducers';

// the next two lines (along with module declarations in declarations.d.ts)
// seem necessary to satisfy TypeScript.
// interface Window {
//   __REDUX_DEVTOOLS_EXTENSION__: any;
// }
// import * as Window from 'Window';
// import * as module from 'module';

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore(initialState = {}, history): any {
  const reducer = createReducer();

  /* const instrument = (<any>Window).__REDUX_DEVTOOLS_EXTENSION__
    ? (<any>Window).__REDUX_DEVTOOLS_EXTENSION__
    : DevTools.instrument(); */

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state

  const middlewares = applyMiddleware(
    routerMiddleware(history),
    createSagaMiddleware()
  );
  /* const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
    // https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#windowdevtoolsextensionconfig
  }); */
  let enhancer;
  if ((<any>Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = (<any>Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      middlewares
    );
  } else {
    enhancer = compose(
      middlewares,
      DevTools.instrument(),
      persistState(getDebugSessionKey())
    );
  }
  /* const enhancer = composeEnhancers(
    middlewares,
    // Required! Enable Redux DevTools with the monitors you chose
    // TODO: Commenting out this instrument to make things work
    instrument
    // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
    // persistState(getDebugSessionKey())
  ); */

  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  // We are @ "^3.5.2"" as of this code write
  const store = createStore<any>(
    reducer,
    initialState,
    enhancer
  );

  // Extensions
  // store.asyncReducers = {}; // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if ((<any>module).hot) {
    (<any>module).hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
