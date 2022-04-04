import { Hours } from "./types/hours";

export function morning(hour: Hours) {
  return hour > 5 && hour < 12;
}
