import { Hours } from "./types/hours";

export function dayTime(hour: Hours) {
  return hour > 5 && hour < 18;
}
