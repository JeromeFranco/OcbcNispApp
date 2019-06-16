import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import Config from '../Config/DebugConfig';
import ScreenTracking from './ScreenTrackingMiddleware';
import { appNavigatorMiddleware } from '../Navigation/ReduxNavigation';

export default function configureAppStore(rootReducer, rootSaga) {
  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  const store = configureStore({
    reducer: rootReducer,
    middleware: [appNavigatorMiddleware, ScreenTracking, sagaMiddleware, ...getDefaultMiddleware()],
    enhancers: Config.useReactotron ? [console.tron.createEnhancer()] : [],
  });

  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
}
