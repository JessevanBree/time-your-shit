import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { SagaMiddleware, Task } from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

import { ReduxStore } from '@interfaces/store'
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper'


export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore: MakeStore = (context: Context) => {
  const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware()
  const store: ReduxStore = createStore(
    rootReducer(),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

  return store;
}

export default createWrapper(makeStore, {debug: true})
