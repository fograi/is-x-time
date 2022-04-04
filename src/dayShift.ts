import { Hours } from "./types/hours";

export function dayShift(hour: Hours) {
  return hour > 7 && hour < 16;
}
