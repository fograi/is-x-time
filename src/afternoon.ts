import { Hours } from "./types/hours";

export function afternoon(hour: Hours) {
  return hour > 11 && hour < 18;
}
