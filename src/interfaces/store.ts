import { Store } from "redux";
import { Task } from "redux-saga";
import { Timer } from "./timer";

export interface ReducerProps {
  type: string;
  payload?: any;
}

export interface RootStore {}

export type ReduxStore = Store<RootStore> & {
  runSagaTask?: () => void
  sagaTask?: Task
}

export interface TimersReducerState {
  timers: Timer[]
}