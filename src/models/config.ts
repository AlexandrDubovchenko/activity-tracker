import { ActivityNames } from "./activity"


export type TimerConfig = {
  [key in keyof typeof ActivityNames]: number;
}

export const defaultTimerConfig: TimerConfig = {
  Focus: 25 * 60,
  Short_Break: 25 * 60,
  Long_Break: 25 * 60,
}
