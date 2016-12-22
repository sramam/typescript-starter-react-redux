import { createStore, applyMiddleware, compose, Store } from 'redux';

import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

export default function configureStore(initialState = {}, history) {
  // Middleware you want to use in production:
  const enhancer = applyMiddleware(
    routerMiddleware(history),
    createSagaMiddleware()
  );

  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer, initialState, enhancer);
};
