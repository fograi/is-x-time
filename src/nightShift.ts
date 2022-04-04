import { Hours } from "./types/hours";

export function nightShift(hour: Hours) {
  return hour >= 0 && hour < 8;
}
