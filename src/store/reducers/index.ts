import { combineReducers } from 'redux'
import TimersReducer from './TimersReducer'
export const combinedReducers = {
  TimersReducer
}

export default () => combineReducers(combinedReducers)