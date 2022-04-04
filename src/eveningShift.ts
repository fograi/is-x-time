import { Hours } from "./types/hours";

export function eveningShift(hour: Hours) {
  return hour > 15 && hour <= 23;
}
