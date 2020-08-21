import { Store } from "redux";
import { SagaMiddleware } from "redux-saga";

export interface ReducerProps {
  type: string;
  payload?: any;
}

interface SagaTask extends Omit<SagaMiddleware, 'run'> {}

export interface RootStore {}

export type ReduxStoreType = Store<RootStore> & {
  runSagaTask?: () => void
  sagaTask?: SagaTask
}