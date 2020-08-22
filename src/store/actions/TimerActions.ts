import { ADD_TIMER, REMOVE_TIMER } from "@store/constants/TimersConstants";
import { ReducerProps } from "@interfaces/store";
import { Timer } from "@interfaces/timer";

export const addTimer = (timer: Timer) => ({
  type: ADD_TIMER,
  payload: { timer }
})

export const removeTimer = (index: number): ReducerProps => ({
  type: REMOVE_TIMER,
  payload: { index }
})