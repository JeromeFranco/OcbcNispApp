import { combineReducers } from 'redux';
import configureAppStore from './CreateStore';
import rootSaga from '../Sagas';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').default,
  github: require('./GithubRedux').default,
  counter: require('./CounterRedux').default,
});

export default () => {
  // eslint-disable-next-line prefer-const
  let { store, sagasManager, sagaMiddleware } = configureAppStore(reducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas);
      });
    });
  }

  return store;
};
