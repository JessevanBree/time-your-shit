import { TimersReducerState, ReducerProps } from "@interfaces/store";
import * as CONSTANTS from '../constants/TimersConstants'

const INITIAL_STATE: TimersReducerState = {
  timers: []
}

export default (state: TimersReducerState = INITIAL_STATE, { type, payload }: ReducerProps) => {
  switch (type) {
    case CONSTANTS.ADD_TIMER:
      return {
        ...state,
        timers: [...state.timers, payload.timer]
      }
    case CONSTANTS.REMOVE_TIMER:
      return {
        ...state,
        timers: [...state.timers.slice(0, payload.index), ...state.timers.slice(payload.index + 1)]
      }

    default:
      return state
  }
}