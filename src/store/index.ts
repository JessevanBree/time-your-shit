import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

import { ReduxStoreType } from '@interfaces/store'

const configureStore = (preloadState: any) => {
  const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware()

  const store: ReduxStoreType = createStore(
    rootReducer(),
    preloadState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  (store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  })()

  return store
}

export default configureStore
